import customAxios from "src/libs/axios/customAxios";

class UserApi {
  public async getUser(params: any): Promise<Response> {
    const { data } = await customAxios.post("/night-study", params);
    return data;
  }
}

export default new UserApi();