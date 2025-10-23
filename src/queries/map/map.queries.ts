import {
  CommentType,
  QuizAnswerResultType,
  QuizAnswerType,
  QuizCost,
  Ruin,
  RuinDetail,
  RuinQuizType,
} from "@src/types/map/ruin.type";
import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import {
  useQuery as useQueryV5,
  UseQueryOptions as UseQueryOptionsV5,
  useSuspenseQuery as useSuspenseQueryV5,
  UseSuspenseQueryOptions as UseSuspenseQueryOptionsV5,
} from "@tanstack/react-query";
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
    QUERY_KEYS.ruin.getRuinDetail(id),
    () => ruinApi.getRuinDetail(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useGetRuins = (
  cornerLatLng: CornerLatLngType,
  options?: UseQueryOptions<Ruin[], AxiosError>
): UseQueryResult<Ruin[], AxiosError> =>
  useQuery<Ruin[], AxiosError>(
    "ruins",
    () =>
      ruinApi.getRuins(
        cornerLatLng.topLeftLatLng.lat,
        cornerLatLng.topLeftLatLng.lng,
        cornerLatLng.bottomRightLatLng.lat,
        cornerLatLng.bottomRightLatLng.lng
      ),
    {
      staleTime: 0,
      cacheTime: 1000 * 60 * 30,
      keepPreviousData: true,
      ...options,
    }
  );

export const useGetRuinQuiz = (
  id: number,
  options?: UseQueryOptions<RuinQuizType[] | undefined, AxiosError>
): UseQueryResult<RuinQuizType[] | undefined, AxiosError> =>
  useQuery<RuinQuizType[] | undefined, AxiosError>(
    QUERY_KEYS.ruin.getRuinQuiz(id),
    () => quizApi.getRuinQuiz(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      suspense: true,
      ...options,
    }
  );

export const useCheckQuizAnswer = (
  quizAnswer: QuizAnswerType[],
  options?: Partial<
    UseSuspenseQueryOptionsV5<
      QuizAnswerResultType,
      Error,
      QuizAnswerResultType,
      typeof QUERY_KEYS.quiz.checkRuinQuizAnswer
    >
  >
) =>
  useSuspenseQueryV5({
    queryKey: QUERY_KEYS.quiz.checkRuinQuizAnswer,
    queryFn: () => quizApi.checkRuinQuizAnswer(quizAnswer),
    ...options,
  });

export const useGetMyBlock = (
  options?: UseQueryOptions<MyBlockType[], AxiosError>
): UseQueryResult<MyBlockType[]> =>
  useQuery<MyBlockType[], AxiosError>(
    QUERY_KEYS.block.getMyBlock,
    () => blockApi.getMyBlock(),
    { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 10, ...options }
  );

export const useGetCourseByName = (
  name: string,
  options?: Partial<
    UseQueryOptionsV5<
      RuinDetail[],
      Error,
      RuinDetail[],
      ReturnType<typeof QUERY_KEYS.ruin.getRuinsByName>
    >
  >
) =>
  useQueryV5({
    queryKey: QUERY_KEYS.ruin.getRuinsByName(name),
    queryFn: () => ruinApi.getRuinsByName(name),
    ...options,
  });

export const useGetCommentById = (
  id: number,
  options?: Partial<
    UseQueryOptionsV5<
      CommentType[],
      Error,
      CommentType[],
      ReturnType<typeof QUERY_KEYS.comment.getCommentById>
    >
  >
) =>
  useQueryV5({
    queryKey: QUERY_KEYS.comment.getCommentById(id),
    queryFn: () => ruinApi.getCommentById(id),
    ...options,
  });

export const useGetQuizHint = (
  id: number,
  options?: Partial<
    UseQueryOptionsV5<
      string,
      Error,
      string,
      ReturnType<typeof QUERY_KEYS.quiz.getRuinQuizHint>
    >
  >
) =>
  useQueryV5({
    queryKey: QUERY_KEYS.quiz.getRuinQuizHint(id),
    queryFn: () => quizApi.getRuinQuizHint(id),
    ...options,
  });
export const useGetQuizCost = (
  options?: Partial<
    UseSuspenseQueryOptionsV5<
      QuizCost,
      Error,
      QuizCost,
      typeof QUERY_KEYS.quiz.getQuizCost
    >
  >
) =>
  useSuspenseQueryV5({
    queryKey: QUERY_KEYS.quiz.getQuizCost,
    queryFn: quizApi.getQuizCost,
    ...options,
  });
