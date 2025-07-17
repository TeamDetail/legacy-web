import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 240px;
  height: fit-content;
  padding: 16px 20px 16px 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
`;
export const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelAlternative = styled.p`
  color: ${LegacyPalette.labelAlternative};
`;

export const Row4 = styled.div`
  display: flex;
  gap: 4px;
`;

export const LabelMedieum = styled(LabelAlternative)`
  ${LegacyTypography.Pretendard.Label.Medium};
`;

export const CreditText = styled.p`
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacySementic.yellow.netural};
`;

export const CreditAddText = styled(LabelAlternative)`
  ${LegacyTypography.Pretendard.Body2.Medium};
`;

export const LocationText = styled.p`
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const BlockTypeText = styled.p<{ $blockType: "legacy" | "default" }>`
  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${({ $blockType }) =>
    $blockType === "legacy"
      ? LegacySementic.blue.netural
      : LegacySementic.purple.netural};
`;

export const HeadlineBold = styled.p`
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const ExploreButtonChildren = styled.div<{ $isExplored: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isExplored }) =>
    $isExplored ? LegacySementic.blue.netural : LegacyPalette.lineNeutral};
  ${LegacyTypography.Pretendard.Caption1.Bold};
`;
