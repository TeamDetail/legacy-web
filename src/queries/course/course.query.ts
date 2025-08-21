import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import courseApi from "@src/api/course/course.api";
import { Course } from "@src/types/course/course.type";

export const useGetAllCourseQuery = (options?: UseQueryOptions<Course[]>) =>
  useQuery({
    queryKey: QUERY_KEYS.course.getAllCourse,
    queryFn: courseApi.getAllCourse,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });
