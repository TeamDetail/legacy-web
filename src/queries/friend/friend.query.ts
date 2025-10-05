import { Friend, FriendRequest } from "@src/types/friend/friend.type";
import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import friendApi from "@src/api/friend/friend.api";

export const useGetMyFriendsQuery = (
  options?: Partial<
    UseSuspenseQueryOptions<
      Friend[],
      Error,
      Friend[],
      typeof QUERY_KEYS.friend.getMyFriends
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.friend.getMyFriends,
    queryFn: friendApi.getMyFriends,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });

export const useGetMyFriendRequestsQuery = (
  type: "sent" | "requests",
  options?: Partial<
    UseSuspenseQueryOptions<
      FriendRequest[],
      Error,
      FriendRequest[],
      ReturnType<typeof QUERY_KEYS.friend.getMyFriendRequests>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.friend.getMyFriendRequests(type),
    queryFn: () => friendApi.getMyFriendRequests(type),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });

export const useGetMyFriendCodeQuery = (
  options?: Partial<
    UseSuspenseQueryOptions<
      string,
      Error,
      string,
      typeof QUERY_KEYS.friend.getMyFriendCode
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.friend.getMyFriendCode,
    queryFn: friendApi.getMyFriendCode,
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
