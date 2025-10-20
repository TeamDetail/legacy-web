import { User } from "@src/types/user/user.type";
import customAxios from "@src/libs/axios/customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";
import { NormalUser } from "@src/types/friend/friend.type";

class UserApi {
  public async getUser(params: number): Promise<BaseResponse<User>> {
    const { data } = await customAxios.get(`/user/${params}`);
    return data;
  }

  public async getMe(): Promise<User> {
    const { data } = await customAxios.get("/user/me");
    return data.data;
  }

  public async patchDescription(params: {
    description: string;
  }): Promise<BaseResponse<null>> {
    const { data } = await customAxios.patch("/user/description", params);
    return data;
  }

  public async searchUserByNickname(nickname: string): Promise<NormalUser[]> {
    const { data } = await customAxios.get(
      `/friends/search?nickname=${nickname}`
    );
    return data.data;
  }

  public async updateNickname(nickname: { nickname: string }): Promise<Response> {
    const { data } = await customAxios.post("/apple/update-nickname", nickname);
    return data.data;
  }
}

export default new UserApi();
