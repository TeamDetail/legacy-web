import customAxios from "@src/libs/axios/customAxios";

type PreSignedUrlType = {
  "uploadUrl": string,
  "imageUrl": string
}

class ImageApi {
  public async getPresignedUrl(fileName: string): Promise<PreSignedUrlType> {
    const { data } = await customAxios.get(`/user/uploadUrl?fileName=${fileName}`);
    return data.data;
  }

  public async uploadToS3(url: string) {
    await customAxios.put(url);
  }
}

export default new ImageApi();
