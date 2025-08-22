import Sidebar from "@components/common/Sidebar";
import Course from "@src/assets/sidebarIcon/course.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import CourseList from "@components/course/CourseList";

const CoursePage = () => {
  return (
    <CoursePageContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <Course width={32} height={32} />
          코스
        </HeaderContainer>
        <CourseList />
      </MainContainer>
    </CoursePageContainer>
  );
};

export default CoursePage;

const CoursePageContainer = styled.div`
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
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;

  ${LegacyTypography.BitBit.Title2};
  color: ${LegacyPalette.labelNormal};
`;
