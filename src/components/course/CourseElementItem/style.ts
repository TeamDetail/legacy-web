import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const ElementItemContainer = styled.div`
  display: flex;
  min-height: fit-content;
  gap: 16px;
  user-select: none;
  cursor: pointer;
`;

export const IndexBox = styled.div<{ $isClear: boolean }>`
  width: 30px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${({ $isClear }) =>
    $isClear ? LegacyPalette.labelNormal : LegacyPalette.labelAssistive};
  border: 1px solid ${LegacySementic.blue.netural};
  background-color: ${({ $isClear }) =>
    $isClear ? LegacySementic.blue.netural : "none"};
`;

export const SelectBox = styled.div<{ $isSelect: boolean | undefined }>`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isSelect }) =>
    $isSelect ? LegacySementic.blue.netural : LegacyPalette.fillNormal};
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body1.Bold};
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

export const ExplorerContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

export const RatioText = styled.div`
  span {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelNeutral};
  }

  ${LegacyTypography.Pretendard.Body2.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Line = styled.div`
  width: 100%;
  height: 0;
  border: 0.5px solid ${LegacyPalette.lineAlternative};
`;
