import customAxios from "@src/libs/axios/customAxios";
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

  public async uploadToS3(url: string, file: string): Promise<Response> {
    const { data } = await axios.put(url,
      { file: file },
      { headers: {
        "Content-Type": "image/jpeg",
        "x-amz-acl": "public-read",
        "Accept": "*/*"
      } }
    );
    return data;
  }
}

export default new ImageApi();
