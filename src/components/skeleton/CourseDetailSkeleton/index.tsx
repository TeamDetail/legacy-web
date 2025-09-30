import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";
import LegacyButton from "@components/common/LegacyButton";
import { LegacyTypography } from "@src/constants/font/fontToken";

const CourseDetailSkeleton = () => {
  return (
    <CourseDetailSkeletonWrapper>
      <CourseItemSkeletonWrapper>
        <CourseImgSkeleton />
        <div>
          <CourseHeaderSkeleton />
          <CourseMainSkeleton />
          <CourseMainSkeleton />
        </div>
      </CourseItemSkeletonWrapper>
      <DetailContainer>
        <LegacyButton
          width="100%"
          size="big"
          isBold={false}
          isFilled={false}
          color={LegacyPalette.lineAlternative}
        >
          <ButtonTextContainer>코스 목록으로 돌아가기</ButtonTextContainer>
        </LegacyButton>
        <CourseElementContainerSkeleton>
          <ProgressBarSkeleton />
          {Array.from({ length: 3 }).map((_, idx) => (
            <CourseElementSkeleton key={idx} />
          ))}
        </CourseElementContainerSkeleton>
      </DetailContainer>
    </CourseDetailSkeletonWrapper>
  );
};

export default CourseDetailSkeleton;

const CourseDetailSkeletonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  height: 100%;
`;

const CourseItemSkeletonWrapper = styled.div`
  width: 56%;
  padding: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    border-radius: 12px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const CourseImgSkeleton = styled.div`
  width: 100%;
  height: 200px;
  ${skeletonAnimtaion};
  border-radius: 12px;
`;

const CourseHeaderSkeleton = styled.div`
  width: 100%;
  height: 92px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const CourseMainSkeleton = styled.div`
  width: 45%;
  height: 26px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const DetailContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
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

const CourseElementContainerSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 12px;
  border-radius: 20px;
`;

const ProgressBarSkeleton = styled.div`
  width: 100%;
  height: 25px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const CourseElementSkeleton = styled.div`
  width: 100%;
  height: 168px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;
