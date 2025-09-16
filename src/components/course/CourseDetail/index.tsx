import Sidebar from "@components/common/Sidebar";
import Course from "@src/assets/sidebarIcon/course.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import { useNavigate, useParams } from "react-router-dom";
import CourseItem from "../CourseItem";
import LegacyButton from "@components/common/LegacyButton";
import CourseElementList from "../CourseElementList";
import useCourse from "@src/hooks/course/useCourse";
import { useEffect } from "react";
import CourseDetailSkeleton from "@components/skeleton/CourseDetailSkeleton";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { courseDetailData, getCourseDetailDataById, isCourseDetailLoading } =
    useCourse();

  const courseId = id ? parseInt(id, 10) : null;

  const handleButtonClick = async () => {
    navigate("/course");
  };

  useEffect(() => {
    if (courseId) {
      getCourseDetailDataById(courseId);
    }
  });

  if (isCourseDetailLoading || !courseDetailData) {
    return (
      <CourseDetailContainer>
        <Sidebar />
        <MainContainer>
          <HeaderContainer>
            <Course width={32} height={32} />
            코스
          </HeaderContainer>
          <CourseDetailSkeleton />
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
              key={courseDetailData!.courseId}
              courseId={courseDetailData!.courseId}
              thumbnailUrl={courseDetailData!.thumbnail}
              courseLength={courseDetailData!.maxRuinsCount}
              clearRuinsCount={courseDetailData!.clearRuinsCount}
              courseDetail={courseDetailData!.description}
              courseName={courseDetailData!.courseName}
              eventId={courseDetailData!.eventId}
              tags={courseDetailData!.tag}
              isHeart={courseDetailData!.heart}
              isClear={courseDetailData!.clear}
              heartCount={courseDetailData!.heartCount}
              clearCount={courseDetailData!.clearCount}
              size="big"
              creator={courseDetailData!.creator}
              disabled
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
              clearRuinsCount={courseDetailData!.clearRuinsCount}
              courseLength={courseDetailData!.maxRuinsCount}
              ruins={courseDetailData!.ruins}
              create={false}
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
