import { useGetAllCourseQuery } from "@src/queries/course/course.query";

const useCourse = () => {
  const { data: courseData, isLoading: isCourseDataLoading } =
    useGetAllCourseQuery();

  return { courseData, isCourseDataLoading };
};

export default useCourse;
