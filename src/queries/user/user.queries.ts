import { BaseDataResponse, User } from "@src/types/user/user.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import userApi from "@src/api/user/user.api";
import { BaseResponse } from "@src/types/globalType/global.type";

export const useGetMeQuery = (
  options?: UseQueryOptions<BaseDataResponse<User>, AxiosError>
): UseQueryResult<BaseDataResponse<User>, AxiosError> =>
  useQuery<BaseDataResponse<User>, AxiosError>(
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
  options?: UseQueryOptions<User, AxiosError>
): UseQueryResult<User, AxiosError> =>
  useQuery<User, AxiosError>(
    QUERY_KEYS.user.getUser,
    () => userApi.getUser(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );
