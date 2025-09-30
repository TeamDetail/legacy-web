import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const CourseListSkeleton = () => {
  return (
    <CourseListSkeletonContainer>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx}>
          <CourseImgSkeleton />
          <CourseHeaderSkeleton />
          <CourseMainSkeleton />
          <CourseMainSkeleton />
        </div>
      ))}
    </CourseListSkeletonContainer>
  );
};

export default CourseListSkeleton;

const CourseListSkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 16px;
  width: 100%;

  @media (max-width: 940px) {
    grid-template-columns: 1fr 1fr;
  }
  overflow: auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const CourseImgSkeleton = styled.div`
  width: 100%;
  height: 144px;
  ${skeletonAnimtaion};
  border-radius: 12px;
`;

const CourseHeaderSkeleton = styled.div`
  width: 100%;
  height: 44px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const CourseMainSkeleton = styled.div`
  width: 45%;
  height: 24px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;
