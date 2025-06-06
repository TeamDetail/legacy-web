import { User } from "@src/types/user/user.type";
import customAxios from "@src/libs/axios/customAxios";

class UserApi {
  public async getUser(params: number): Promise<User> {
    const { data } = await customAxios.get(`/user/${params}`);
    return data;
  }

  public async getMe(): Promise<User> {
    const { data } = await customAxios.get("/user/me");
    return data
  }
}

export default new UserApi();