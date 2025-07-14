import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const TrialStatusBar = styled.section<{
  $isLoading: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 180px;
  height: 100%;
  transition: all 0.18s ease-out;
  transform: ${({ $isLoading }) => $isLoading === "true" ? "translateX(-280px)" : "" };

  p {
    ${LegacyTypography.BitBit.Headline}
  }
`

export const TrialStatusMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const TrialFloorStatus = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 4px;
  > div {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 2px solid ${LegacySementic.purple.normal};
    display: flex;
    justify-content: center;
    align-items: center;

    ${LegacyTypography.BitBit.Title2}
    color: ${LegacyPalette.primaryNormal};
  }
`

export const TrialScoreStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;
  padding: 8px;
  > p {
    ${LegacyTypography.BitBit.Title3}
    color: ${LegacyPalette.labelNormal};
  }
`

export const TrialStatusMiniMenu = styled.div<{
  $color?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;

  ${LegacyTypography.Pretendard.Label.Bold}
  color: ${LegacyPalette.labelAlternative};

  > p {
    ${LegacyTypography.BitBit.Heading2};
    background-color: ${LegacyPalette.fillNormal};
    color: ${({ $color }) => $color || LegacyPalette.labelNormal};
    text-align: center;
    width: 100%;
    padding: 4px;
    overflow: hidden;
    border-radius: 8px;
  }
`

export const TrialStatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  p {
    ${LegacyTypography.Pretendard.Caption1.Bold}
    color: ${LegacyPalette.labelAlternative};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const TrialStat = styled.span<{
  $color: string;
}>`
  ${LegacyTypography.BitBit.Headline}
  color: ${({ $color }) => $color};
`

export const TrialStatusFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
`