import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import courseApi from "@src/api/course/course.api";
import { Course, CourseRuins } from "@src/types/course/course.type";

export const useGetAllCourseQuery = (
  options?: Partial<
    UseQueryOptions<
      Course[],
      Error,
      Course[],
      typeof QUERY_KEYS.course.getAllCourse
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.course.getAllCourse,
    queryFn: courseApi.getAllCourse,
    ...options,
  });

export const useGetCourseRuinsById = (
  id: number,
  options?: Partial<
    UseQueryOptions<
      CourseRuins,
      Error,
      CourseRuins,
      ReturnType<typeof QUERY_KEYS.course.getCourseRuinsById>
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.course.getCourseRuinsById(id),
    queryFn: () => courseApi.getCourseRuinsbyId(id),
    ...options
  });
