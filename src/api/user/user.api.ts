import { User } from "@src/types/user/user.type";
import customAxios from "@src/libs/axios/customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";

class UserApi {
  public async getUser(params: number): Promise<BaseResponse<User>> {
    const { data } = await customAxios.get(`/user/${params}`);
    return data;
  }

  public async getMe(): Promise<BaseResponse<User>> {
    const { data } = await customAxios.get("/user/me");
    return data;
  }
  
  public async patchDescription(params: { description: string }): Promise<BaseResponse<null>> {
    const { data } = await customAxios.patch("/user/description", params);
    return data;
  }
}

export default new UserApi();
