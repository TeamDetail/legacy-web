import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const RuinDetailSkeleton = () => {
  return (
    <>
      <RuinNameScoreContainer>
        <RuinNameContainer />
        <ScoreContainer />
      </RuinNameScoreContainer>
      <CardSkeleton />
      <DetailContainer>
        <span>탐험 필요 크레딧</span>
        <CostText />
      </DetailContainer>
    </>
  );
};

export default RuinDetailSkeleton;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 1;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const RuinNameContainer = styled.div`
  width: 100%;
  height: 40px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const ScoreContainer = styled.div`
  width: 65%;
  height: 16px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;

const CardSkeleton = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 20px;
  ${skeletonAnimtaion}
  border-radius: 8px;
`;

const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CostText = styled.div`
  width: 100%;
  height: 24px;
  ${skeletonAnimtaion};
  border-radius: 8px;
`;
