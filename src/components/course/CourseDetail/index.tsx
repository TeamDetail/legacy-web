import Sidebar from "@components/common/Sidebar";
import Course from "@src/assets/sidebarIcon/course.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import { useNavigate, useParams } from "react-router-dom";
import CourseItem from "../CourseItem";
import LegacyButton from "@components/common/LegacyButton";
import CourseElementList from "./CourseElementList";
import useCourse from "@src/hooks/course/useCourse";
import { useEffect } from "react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { courseData, refetchCourseData, isCourseDataLoading } = useCourse();

  const courseId = id ? parseInt(id, 10) : null;

  const currentCourse = courseData?.find(
    (course) => course.courseId === courseId
  );

  useEffect(() => {
    if (!courseData || courseData.length === 0) {
      refetchCourseData();
    }
  }, []);

  const handleButtonClick = async () => {
    await refetchCourseData();
    navigate("/course");
  };

  // 로딩 중이거나 courseId가 없는 경우
  if (!courseId || isCourseDataLoading) {
    return (
      <CourseDetailContainer>
        <Sidebar />
        <MainContainer>
          <HeaderContainer>
            <Course width={32} height={32} />
            코스
          </HeaderContainer>
          <></>
        </MainContainer>
      </CourseDetailContainer>
    );
  }

  // 해당 코스를 찾을 수 없는 경우
  if (!currentCourse) {
    return (
      <CourseDetailContainer>
        <Sidebar />
        <MainContainer>
          <HeaderContainer>
            <Course width={32} height={32} />
            코스
          </HeaderContainer>
          <ErrorContainer>
            <div>코스를 찾을 수 없습니다.</div>
            <LegacyButton
              width="200px"
              size="big"
              isBold={false}
              isFilled={true}
              color={LegacyPalette.lineAlternative}
              handleClick={() => navigate("/course")}
            >
              코스 목록으로 돌아가기
            </LegacyButton>
          </ErrorContainer>
        </MainContainer>
      </CourseDetailContainer>
    );
  }

  return (
    <CourseDetailContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <Course width={32} height={32} />
          코스
        </HeaderContainer>
        <DetailWrapper>
          <CourseItemWrapper>
            <CourseItem
              key={currentCourse.courseId}
              courseId={currentCourse.courseId}
              thumbnailUrl={currentCourse.thumbnail}
              courseLength={currentCourse.maxRuinsCount}
              clearRuinsCount={currentCourse.clearRuinsCount}
              courseDetail={currentCourse.description}
              courseName={currentCourse.courseName}
              eventId={currentCourse.eventId}
              tags={currentCourse.tag}
              isHeart={currentCourse.heart}
              isClear={currentCourse.clear}
              heartCount={currentCourse.heartCount}
              clearCount={currentCourse.clearCount}
              size="big"
              creator={currentCourse.creator}
              disabled={true}
            />
          </CourseItemWrapper>
          <DetailContainer>
            <LegacyButton
              width="100%"
              size="big"
              isBold={false}
              isFilled={false}
              color={LegacyPalette.lineAlternative}
              handleClick={handleButtonClick}
            >
              <ButtonTextContainer>코스 목록으로 돌아가기</ButtonTextContainer>
            </LegacyButton>
            <CourseElementList
              clearRuinsCount={currentCourse.clearRuinsCount}
              courseLength={currentCourse.maxRuinsCount}
              courseId={currentCourse.courseId}
            />
          </DetailContainer>
        </DetailWrapper>
      </MainContainer>
    </CourseDetailContainer>
  );
};

export default CourseDetail;

const CourseDetailContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
  padding: 28px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  gap: 12px;
`;

const HeaderContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  gap: 12px;
  width: 100%;
  height: 76px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;

  ${LegacyTypography.BitBit.Title2};
  color: ${LegacyPalette.labelNormal};
`;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  height: calc(100% - 88px);
`;

const CourseItemWrapper = styled.div`
  width: 56%;
  padding: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  height: fit-content;
`;

const DetailContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ButtonTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNeutral};
`;

const ErrorContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  ${LegacyTypography.Pretendard.Body1.Regular};
  color: ${LegacyPalette.labelNeutral};
`;
