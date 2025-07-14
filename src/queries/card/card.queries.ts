import { CardCollection, RegionAttributeType } from "@src/types/card/card.type";
import { BaseResponse } from "@src/types/globalType/global.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import cardApi from "@src/api/card/card.api";

export const useGetCardByRegion = (
  region: RegionAttributeType,
  options?: UseQueryOptions<BaseResponse<CardCollection>, AxiosError>
): UseQueryResult<BaseResponse<CardCollection>, AxiosError> =>
  useQuery<BaseResponse<CardCollection>, AxiosError>(
    [QUERY_KEYS.card.getCardByRegion, region],
    () => cardApi.getCardByRegion(region),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );