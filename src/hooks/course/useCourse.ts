import {
  useGetAllCourseQuery,
  useGetCourseDetailById,
} from "@src/queries/course/course.query";
import { useEffect, useState } from "react";

const useCourse = () => {
  const [courseId, setCourseId] = useState<number | undefined>(undefined);

  const {
    data: courseData,
    isLoading: isCourseDataLoading,
    refetch: getCourseData,
  } = useGetAllCourseQuery({ enabled: true });

  const {
    data: courseDetailData,
    refetch: getCourseDetailData,
    isLoading: isCourseDetailLoading,
  } = useGetCourseDetailById(courseId!, {
    enabled: !!courseId,
  });

  const getCourseDetailDataById = (id: number) => {
    setCourseId(id);
  };

  useEffect(() => {
    if (courseId) {
      getCourseDetailData();
    }
  }, [courseId]);

  return {
    courseData,
    isCourseDataLoading,
    courseDetailData,
    getCourseDetailDataById,
    isCourseDetailLoading,
    getCourseData,
  };
};

export default useCourse;
