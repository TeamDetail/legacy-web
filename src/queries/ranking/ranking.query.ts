import rankingApi from "@src/api/ranking/ranking.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { BaseResponse } from "@src/types/globalType/global.type";
import { ExploreRankingType } from "@src/types/ranking/ranking.type";
import { AxiosError } from "axios";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

export const useGetTrialRanking = (
  scope: "all" | "friend",
  options?: UseQueryOptions<BaseResponse<ExploreRankingType[]>, AxiosError>
): UseQueryResult<BaseResponse<ExploreRankingType[]>, AxiosError> =>
  useQuery<BaseResponse<ExploreRankingType[]>, AxiosError>(
    QUERY_KEYS.ranking("explore", scope),
    () => rankingApi.getExploreRanking(scope),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );
