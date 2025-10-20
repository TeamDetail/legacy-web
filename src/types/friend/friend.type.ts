export interface Friend {
  userId: number;
  nickname: string;
  profileImage: string;
  friendCode: string;
  isKakaoFriend: boolean;
  isMutualFriend: boolean;
  level: number;
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
}

export interface NormalUser {
  userId: number;
  nickname: string;
  profileImage: string;
  level: number;
  friendCode: string;
  isAlreadyFriend: boolean;
}
