import { TitleType } from "@src/types/user/user.type";

export interface Friend {
  userId: number;
  nickname: string;
  profileImage: string;
  friendCode: string;
  isKakaoFriend: boolean;
  isMutualFriend: boolean;
  level: number;
  title: TitleType;
}

export interface FriendRequest {
  requestId: number;
  senderId: number;
  receiverId: number;
  senderNickname: string;
  senderProfileImage: string;
  senderLevel: number;
  receiverNickname: string;
  receiverProfileImage: string;
  receiverLevel: number;
  createdAt: string;
  title: TitleType;
}

export interface NormalUser {
  userId: number;
  nickname: string;
  profileImage: string;
  level: number;
  friendCode: string;
  isAlreadyFriend: boolean;
  title: TitleType
}
