import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import ArrowLeftImg from "@src/assets/arrowLeft.svg";
import ArrowRightImg from "@src/assets/arrowRight.svg";

export const TileInfoWrapper = styled.div`
  width: 240px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  justify-content: space-between;
  border-radius: 20px;
`;

export const TileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const PageControllerContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNeutral};
`;

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

export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

export const CostText = styled.div`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacySementic.yellow.netural};
  span {
    ${LegacyTypography.Pretendard.Body2.Medium}
    color: ${LegacyPalette.labelAlternative}
  }
`;

export const ArrowRight = styled.img.attrs({ src: ArrowRightImg })<{
  $isLastPage: boolean;
}>`
  width: 20px;
  height: 20px;
  display: ${({ $isLastPage }) => $isLastPage && "none"};
`;

export const ArrowLeft = styled.img.attrs({ src: ArrowLeftImg })<{
  $isFirstPage: boolean;
}>`
  width: 20px;
  height: 20px;
  display: ${({ $isFirstPage }) => $isFirstPage && "none"};
`;

export const ButtonContainer = styled.div`
  margin-top: 12px;
`;

export const ButtonText = styled.div<{ $isExplored: boolean }>`
  color: ${({ $isExplored }) =>
    $isExplored ? LegacyPalette.lineNeutral : LegacySementic.blue.netural};
  ${LegacyTypography.Pretendard.Caption1.Bold}
`;

export const ArrowContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export const ButtonWrapper = styled.div`
  margin-top: 12px;
`;
