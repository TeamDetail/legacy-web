import { skeletonAnimtaion } from "@components/skeleton/animation"
import styled from "styled-components"

const AchievementSkeleton = () => {
  return (
    <SkeletonContainer>
      {Array.from({length: 10}).map((_, idx) => (
        <Skeleton key={idx}>
          <div />
          <section>
            <div />
            <div />
            <p />
          </section>
        </Skeleton>
      ))}
    </SkeletonContainer>
  );
}

export default AchievementSkeleton
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const Skeleton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 8px;
  border-radius: 12px;
  gap: 12px;
  ${skeletonAnimtaion}
  > div {
    height: 72px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    ${skeletonAnimtaion};
  }
  > section {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 4px;
    > div {
      width: 40%;
      height: 16px;
      ${skeletonAnimtaion}
      border-radius: 8px;
    }
    > p {
      width: 60%;
      margin-top: 4px;
      height: 16px;
      ${skeletonAnimtaion}
      border-radius: 8px;
    }
  }
`;