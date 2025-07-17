import {
  QuizAnswerResultType,
  QuizAnswerType,
  Ruin,
  RuinDetail,
  RuinQuizType,
} from "@src/types/map/ruin.type";
import { Axios, AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import ruinApi from "@src/api/map/ruin.api";
import { CornerLatLngType } from "@src/types/map/latLng.type";
import quizApi from "@src/api/map/quiz.api";
import { MyBlockType } from "@src/types/map/normalBlock.type";
import blockApi from "@src/api/map/block.api";

export const useGetRuinDetail = (
  id: number,
  options?: UseQueryOptions<RuinDetail, AxiosError>
): UseQueryResult<RuinDetail, AxiosError> =>
  useQuery<RuinDetail, AxiosError>(
    QUERY_KEYS.ruin.getRuinDetail,
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
    QUERY_KEYS.ruin.getRuins,
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
    QUERY_KEYS.ruin.getRuinQuiz,
    () => quizApi.getRuinQuiz(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useCheckRuinQuizAnswer = (
  answer: QuizAnswerType[],
  options?: UseQueryOptions<QuizAnswerResultType, AxiosError>
): UseQueryResult<QuizAnswerResultType> =>
  useQuery<QuizAnswerResultType, AxiosError>(
    QUERY_KEYS.quiz.checkRuinQuizAnswer,
    () => quizApi.checkRuinQuizAnswer(answer),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useGetMyBlock = (
  options?: UseQueryOptions<MyBlockType[], AxiosError>
): UseQueryResult<MyBlockType[]> =>
  useQuery<MyBlockType[], AxiosError>(
    QUERY_KEYS.block.getMyBlock,
    () => blockApi.getMyBlock(),
    { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 10, ...options }
  );
