import customAxios from "@src/libs/axios/customAxios";
import { Friend, FriendRequest } from "@src/types/friend/friend.type";

class FriendApi {
  public async getMyFriends(): Promise<Friend[]> {
    const { data } = await customAxios.get("/friends");
    return data.data;
  }

  public async getMyFriendRequests(
    type: "sent" | "requests"
  ): Promise<FriendRequest[]> {
    const { data } = await customAxios.get(`/friends/${type}`);
    return data.data;
  }

  public async getMyFriendCode(): Promise<string> {
    const { data } = await customAxios.get("/friends/my-code");
    return data.data;
  }

  }
}

export default new FriendApi();
