import Sidebar from "@components/common/Sidebar";
import Course from "@src/assets/sidebarIcon/course.svg?react";
import styled from "styled-components";
import CourseList from "@components/course/CourseList";
import { HeaderContainer, MainContainer, PageContainer } from "@src/styles/globalStyles";

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

const CoursePageContainer = styled(PageContainer)`
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
`;