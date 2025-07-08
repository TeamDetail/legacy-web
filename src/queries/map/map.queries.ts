import { Ruin, RuinDetail } from "@src/types/map/ruin.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import ruinApi from "@src/api/map/ruin.api";

export const useGetRuinDetail = (
  id: number,
  options?: UseQueryOptions<RuinDetail | undefined, AxiosError>
): UseQueryResult<RuinDetail | undefined, AxiosError> =>
  useQuery<RuinDetail | undefined, AxiosError>(
    QUERY_KEYS.user.getMe,
    () => ruinApi.getRuinDetail(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useGetRuins = (
  minLat: number,
  minLng: number,
  maxLat: number,
  maxLng: number,
  options?: UseQueryOptions<Ruin[] | undefined, AxiosError>
): UseQueryResult<Ruin[] | undefined, AxiosError> =>
  useQuery<Ruin[] | undefined, AxiosError>(
    QUERY_KEYS.map.getRuins,
    () => ruinApi.getRuins(minLat, minLng, maxLat, maxLng),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );
