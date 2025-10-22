export interface Friend {
  userId: number;
  nickname: string;
  profileImage: string;
  friendCode: string;
  isKakaoFriend: boolean;
  isMutualFriend: boolean;
  level: number;
  styleId: number | null;
  styleName: string | null;
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
  receiverStyleId: number | null;
  receiverStyleName: string | null;
  createdAt: string;
  senderStyleId: number | null;
  senderStyleName: string | null;
}

export interface NormalUser {
  userId: number;
  nickname: string;
  profileImage: string;
  level: number;
  friendCode: string;
  isAlreadyFriend: boolean;
  styleId: number | null;
  styleName: string | null;
}
