import { User } from "@src/types/user/user.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import userApi from "@src/api/user/user.api";
import { BaseResponse } from "@src/types/globalType/global.type";
import { NormalUser } from "@src/types/friend/friend.type";

export const useGetMeQuery = (
  options?: UseQueryOptions<BaseResponse<User>, AxiosError>
): UseQueryResult<BaseResponse<User>, AxiosError> =>
  useQuery<BaseResponse<User>, AxiosError>(
    QUERY_KEYS.user.getMe,
    () => userApi.getMe(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useGetUserQuery = (
  id: number,
  options?: UseQueryOptions<BaseResponse<User>, AxiosError>
): UseQueryResult<BaseResponse<User>, AxiosError> =>
  useQuery<BaseResponse<User>, AxiosError>(
    QUERY_KEYS.user.getUser,
    () => userApi.getUser(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useSearchUserByNicknameQuery = (
  nickname: string,
  options?: UseQueryOptions<NormalUser[], AxiosError>
): UseQueryResult<NormalUser[], AxiosError> =>
  useQuery<NormalUser[], AxiosError>(
    QUERY_KEYS.user.getUserByNickname(nickname),
    () => userApi.searchUserByNickname(nickname),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const usePatchUserDataMutation = () => {
  const mutation = useMutation({
    mutationFn: (params: { description: string }) =>
      userApi.patchDescription(params),
  });
  return mutation;
}