import { DailyData } from "@src/types/daily/daily.type";
import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import dailyApi from "@src/api/daily/daily.api";

export const useGetDailyDataQuery = (
  options?: Partial<
    UseSuspenseQueryOptions<
      DailyData[],
      Error,
      DailyData[],
      typeof QUERY_KEYS.daily.getDailyData
    >
  >
) =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.daily.getDailyData,
    queryFn: dailyApi.getDailyData,
    ...options,
  });
