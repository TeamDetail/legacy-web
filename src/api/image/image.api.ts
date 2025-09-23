import customAxios from "@src/libs/axios/customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";
import { User } from "@src/types/user/user.type";
import axios from "axios";

type PreSignedUrlType = {
  "uploadUrl": string,
  "imageUrl": string
}

class ImageApi {
  public async getPresignedUrl(fileName: string): Promise<PreSignedUrlType> {
    const { data } = await customAxios.get(`/user/uploadUrl?fileName=${fileName}`);
    return data.data;
  }

  public async uploadToS3(url: string, file: File): Promise<Response> {
    const { data } = await axios.put(url, file, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-amz-acl": "public-read",
        Accept: "*/*",
      },
    });
    return data;
  }

  public async patchUserImage(userImgUrl: string): Promise<BaseResponse<User>> {
    const { data } = await customAxios.patch("/user/image", {profileImageUrl: userImgUrl});
    return data
  }
}

export default new ImageApi();
