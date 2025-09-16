import Sidebar from "@components/common/Sidebar";
import Course from "@src/assets/sidebarIcon/course.svg?react";
import styled from "styled-components";
import CreateCourse from "@components/course/CreateCourse";
import { HeaderContainer, MainContainer, PageContainer } from "@src/styles/globalStyles";

const CreateCoursePage = () => {
  return (
    <CreateCourseContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <Course width={32} height={32} />
          코스
        </HeaderContainer>
        <CreateCourse />
      </MainContainer>
    </CreateCourseContainer>
  );
};

export default CreateCoursePage;

const CreateCourseContainer = styled(PageContainer)`
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
`;
