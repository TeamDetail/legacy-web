import imageApi from '@src/api/image/image.api';
import useUserStore from '@src/store/useUserStore';
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';

const useChangeImage = () => {
  const {setUserData} = useUserStore();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [fileInfo, setFileInfo] = useState<FormData | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result);
        console.log("setPreview")
      };
      formData.append("file", file)
      setFileInfo(formData);

    } catch (err) {
      console.error("파일 읽기 오류:", err);
    }
  };

  const handleSave = async () => {
    // 저장할 파일이 없으면 중단
    if (!fileInfo) return false;

    const {uploadUrl, imageUrl} = await imageApi.getPresignedUrl((fileInfo.get("file") as File).name)
    await imageApi.uploadToS3(uploadUrl, fileInfo.get("file") as File)
        .then(() => {
          setPreview(imageUrl);
          imageApi.patchUserImage(imageUrl)
          .then((data) => {
            setUserData(data.data)
            toast.success("프로필 이미지 변경 성공!")
          })
        })
      .catch(() => {
        toast.error(`이미지 업로드에 실패했습니다!`);
        return false;
      });
    return true;
  };

  return {
    preview,
    handleFileChange,
    handleSave
  }
}

export default useChangeImage