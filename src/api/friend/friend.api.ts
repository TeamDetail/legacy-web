import customAxios from "@src/libs/axios/customAxios";
import { Friend, FriendRequest } from "@src/types/friend/friend.type";

class FriendApi {
  public async getMyFriends(): Promise<Friend[]> {
    const { data } = await customAxios.get("/friends");
    return data;
  }

  public async getMyFriendRequests(
    type: "sents" | "requests"
  ): Promise<FriendRequest[]> {
    const { data } = await customAxios.get(`/friends/${type}`);
    return data;
  }

  public async getMyFriendCode(): Promise<string> {
    const { data } = await customAxios.get("/friends/code");
    return data;
  }
}

export default new FriendApi();
