// import imageApi from '@src/api/image/image.api';
import { useState } from 'react'
import { toast } from 'react-toastify';

const useChangeImage = () => {
  const [currentImage] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const selectFile = (file: File | null): boolean => {
    if (!file?.type.startsWith("image/")) {
      toast.error('이미지를 업로드해주세요!');
      return false;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        setPreviewImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
    return true;
  };

  const uploadImage = async (): Promise<void> => {
    if (!selectedFile) return;

    try {
      // API 호출들
      // const { uploadUrl, imageUrl } = await imageApi.getPresignedUrl(
      //   selectedFile.name,
      // );
      // await uploadToS3(selectedFile, uploadUrl, setUploadProgress);
      // await updateProfile(imageUrl);

      // 성공 처리
      // setCurrentImage(imageUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };


  return {
    selectFile,
    currentImage,
    previewImage,
    uploadImage,
  }
}

export default useChangeImage