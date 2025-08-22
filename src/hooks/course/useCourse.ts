import {
  useGetAllCourseQuery,
  useGetCourseRuinsById,
} from "@src/queries/course/course.query";
import { Course } from "@src/types/course/course.type";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useCourse = () => {
  const [courseId, setCourseId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const {
    data: courseData,
    isLoading: isCourseDataLoading,
    refetch: getCourseData,
  } = useGetAllCourseQuery({ enabled: true });

  const { data: courseRuinsData, refetch: getCourseRuinsData } =
    useGetCourseRuinsById(courseId!, {
      enabled: !!courseId,
    });

  const getCourseRuinsDataById = (id: number) => {
    setCourseId(id);
  };

  // 강제 리프레시 함수 - invalidate + refetch 조합
  const refetchCourseData = async () => {
    try {
      // 1. 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["courses"] }); // 실제 쿼리 키로 수정 필요

      // 2. 강제 리패치
      const result = await getCourseData();

      return result;
    } catch (error) {
      console.error("Failed to refetch course data:", error);
      throw error;
    }
  };

  // CourseDetail에서 특정 코스 정보를 가져오는 헬퍼 함수
  const getCourseById = (id: number) => {
    return courseData?.find((course) => course.courseId === id);
  };

  // 코스 하트 상태를 업데이트하는 함수 (Optimistic Update)
  const updateCourseHeart = (
    courseId: number,
    newHeartState: boolean,
    newHeartCount: number
  ) => {
    queryClient.setQueryData(["courses"], (oldData: Course[]) => {
      if (!oldData) return oldData;

      return oldData.map((course: Course) =>
        course.courseId === courseId
          ? { ...course, heart: newHeartState, heartCount: newHeartCount }
          : course
      );
    });
  };

  useEffect(() => {
    if (courseId) {
      getCourseRuinsData();
    }
  }, [courseId]);

  return {
    courseData,
    isCourseDataLoading,
    courseRuinsData,
    getCourseRuinsDataById,
    refetchCourseData,
    getCourseById,
    updateCourseHeart,
  };
};

export default useCourse;
