import { MenuBadge } from "@components/common/MenuBadge";
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

export const SkeletonWrapper = styled.div`
  width: 240px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  justify-content: space-between;
  border-radius: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 1;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

export const RuinNameContainer = styled.div`
  width: 100%;
  height: 80px;
  ${skeletonAnimtaion};
`;

const ScoreContainer = styled.div`
  width: 65%;
  height: 16px;
  ${skeletonAnimtaion};
`;

const CardSkeleton = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 20px;
  ${skeletonAnimtaion}
`;

const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CostText = styled.div`
  width: 100%;
  height: 16px;
  ${skeletonAnimtaion};
`;
