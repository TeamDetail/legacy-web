import imageApi from '@src/api/image/image.api';
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';

interface Base64Result {
  base64: string;
  fullDataUrl: string | ArrayBuffer | null;
}

const useChangeImage = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileData, setFileData] = useState<Base64Result | null>(null);
  const [fileInfo, setFileInfo] = useState<File | null>(null);

  const fileToBase64 = (file: File): Promise<Base64Result> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          const base64 = reader.result.split(",")[1]; // "data:*/*;base64," 제거
          resolve({ base64, fullDataUrl: reader.result });
        } else {
          reject(new Error("파일 읽기 실패"));
        }
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { base64, fullDataUrl } = await fileToBase64(file);

      if (typeof fullDataUrl === "string") {
        setPreview(fullDataUrl); // 미리보기
      }
      setFileData({ base64, fullDataUrl });
      setFileInfo(file);
    } catch (err) {
      console.error("파일 읽기 오류:", err);
    }
  };


  const handleSave = async () => {
    // 저장할 파일이 없으면 중단
    if (!fileData || !fileInfo) return true;

    await imageApi.getPresignedUrl(fileInfo.name)
    .then(data => (
      imageApi.uploadToS3(data.uploadUrl, fileData.base64)
      .then(() => {
        setPreview(data.imageUrl)
      })
    )).catch(() => {
      toast.error(`이미지 업로드에 실패했습니다!`)
      return false;
    })
    return true;
  };


  return {
    preview,
    handleFileChange,
    handleSave
  }
}

export default useChangeImage