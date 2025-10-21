import { skeletonAnimtaion } from "@components/skeleton/animation";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const DetailContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const ScoreContainer = styled.div<{ $gap: string }>`
  display: flex;
  gap: 2px;
  color: ${LegacyPalette.fillAlternative};
  ${LegacyTypography.Pretendard.Caption2.Medium}
`;

export const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CostTextSkel = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 8px;
  ${skeletonAnimtaion}
`