import { Ruin, RuinDetail, RuinQuizType } from "@src/types/map/ruin.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import ruinApi from "@src/api/map/ruin.api";
import { CornerLatLngType } from "@src/types/map/latLng.type";

export const useGetRuinDetail = (
  id: number,
  options?: UseQueryOptions<RuinDetail, AxiosError>
): UseQueryResult<RuinDetail, AxiosError> =>
  useQuery<RuinDetail, AxiosError>(
    QUERY_KEYS.map.getRuinDetail,
    () => ruinApi.getRuinDetail(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useGetRuins = (
  cornerLatLng: CornerLatLngType,
  // minLat: number,
  // minLng: number,
  // maxLat: number,
  // maxLng: number,
  options?: UseQueryOptions<Ruin[], AxiosError>
): UseQueryResult<Ruin[], AxiosError> =>
  useQuery<Ruin[], AxiosError>(
    QUERY_KEYS.map.getRuins,
    () =>
      ruinApi.getRuins(
        cornerLatLng.topLeftLatLng.lat,
        cornerLatLng.topLeftLatLng.lng,
        cornerLatLng.bottomRightLatLng.lat,
        cornerLatLng.bottomRightLatLng.lng
      ),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useGetRuinQuiz = (
  id: number,
  options?: UseQueryOptions<RuinQuizType[] | undefined, AxiosError>
): UseQueryResult<RuinQuizType[] | undefined, AxiosError> =>
  useQuery<RuinQuizType[] | undefined, AxiosError>(
    QUERY_KEYS.map.getRuinQuiz,
    () => ruinApi.getRuinQuiz(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );
