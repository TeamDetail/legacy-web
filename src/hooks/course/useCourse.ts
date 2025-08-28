import courseApi from "@src/api/course/course.api";
import {
  useGetAllCourseQuery,
  useGetCourseDetailById,
} from "@src/queries/course/course.query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useCourse = () => {
  const navigate = useNavigate();
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

  const handleCourseSubmit = async (
    tag: string[],
    name: string,
    description: string,
    ruinsId: number[]
  ) => {
    try {
      if (tag.length < 1) {
        toast.error("태그를 최소 1개 이상 입력해주세요!");
        return;
      }
      if (name.trim().length < 1) {
        toast.error("코스 이름을 입력해주세요!");
        return;
      }
      if (description.trim().length < 1) {
        toast.error("코스 설명을 입력해주세요!");
        return;
      }
      if (ruinsId.length < 5 || ruinsId.length > 30) {
        toast.error("유적지는 최소 5개, 최대 30개까지 선택할 수 있습니다!");
        return;
      }

      const data = await courseApi.createCourse(
        tag,
        name,
        description,
        ruinsId
      );
      if (data) {
        toast.success("코스 제작 성공");
        navigate("/course");
      }
    } catch {
      toast.error(`코스 제작 실패`);
    }
  };

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
    handleCourseSubmit,
  };
};

export default useCourse;
