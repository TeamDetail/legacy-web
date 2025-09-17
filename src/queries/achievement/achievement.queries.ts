import achievementApi from "@src/api/achievement/achievement.api";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { Achievement, AchievementValueType } from "@src/types/achievement/achievement.type";
import { BaseResponse } from "@src/types/globalType/global.type";
import { useSuspenseQuery, UseSuspenseQueryOptions } from "@tanstack/react-query";

export const useGetAchievementQuery = (
  type: AchievementValueType,
  options?: Partial<
    UseSuspenseQueryOptions<
      BaseResponse<Achievement[]>,
      Error,
      BaseResponse<Achievement[]>,
      ReturnType<typeof QUERY_KEYS.achievement.getAchievement>
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.achievement.getAchievement(type),
    queryFn: () => achievementApi.getAchievement(type),
    ...options,
  });
