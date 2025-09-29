import rankingApi from "@src/api/ranking/ranking.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { ExploreRankingType, LevelRankingType } from "@src/types/ranking/ranking.type";
import {
  useSuspenseQuery as useQueryV5,
  UseSuspenseQueryOptions as UseSuspenseQueryOptionsV5,
} from "@tanstack/react-query";
export const useGetExploreRanking = (
  scope: "all" | "friend",
  options?: Partial<
    UseSuspenseQueryOptionsV5<
      ExploreRankingType[],
      Error,
      ExploreRankingType[],
      ReturnType<typeof QUERY_KEYS.ranking>
    >
  >
) =>
  useQueryV5({
    queryKey: QUERY_KEYS.ranking("explore", scope),
    queryFn: () => rankingApi.getExploreRanking(scope),
    ...options
  });

export const useGetLevelRanking = (
  scope: "all" | "friend",
  options?: Partial<
    UseSuspenseQueryOptionsV5<
      LevelRankingType[],
      Error,
      LevelRankingType[],
      ReturnType<typeof QUERY_KEYS.ranking>
    >
  >
) =>
  useQueryV5({
    queryKey: QUERY_KEYS.ranking("level", scope),
    queryFn: () => rankingApi.getLevelRanking(scope),
    ...options,
  });
