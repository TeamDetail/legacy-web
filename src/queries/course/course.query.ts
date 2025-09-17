import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import courseApi from "@src/api/course/course.api";
import { Course, CourseDetail } from "@src/types/course/course.type";

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

export const useGetCourseDetailById = (
  id: number,
  options?: Partial<
    UseQueryOptions<
      CourseDetail,
      Error,
      CourseDetail,
      ReturnType<typeof QUERY_KEYS.course.getCourseDetailById>
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.course.getCourseDetailById(id),
    queryFn: () => courseApi.getCourseDetailbyId(id),
    ...options,
  });
