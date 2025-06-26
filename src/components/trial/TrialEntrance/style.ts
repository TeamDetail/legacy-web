import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const TrialEntanceContainer = styled.section<{
  $isLoading: string;
}>`
  display: flex;
  height: 100%;
  flex-grow: 1;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.18s ease-out;
  transform: ${({ $isLoading }) => $isLoading === "true" ? "translateY(-900px)" : ""};
`

export const TrialFloorContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column-reverse;
  justify-content: start;
  min-width: 240px;

  @media (max-width: 1155px) {
    min-width: 220px;
  }

  @media (max-width: 900px) {
    display: none;
  }

  margin: 0 36px;
  height: 100%;
  overflow: hidden;
`

export const TrialShadow = styled.div`
  position: absolute;
  width: 240px;
  height: 776px;
  background: linear-gradient(180deg, #1C1C1E 0%, rgba(28, 28, 30, 0.00) 40.04%,  #1C1C1E 100%);
`

export const TrialFloorItem = styled.div<{
  $color: string;
  $currentFloor: number;
  $itemFloor: number;
  }>`
  display: flex;
  padding: 4px;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  background-color: ${LegacyPalette.fillNormal};

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    ${LegacyTypography.BitBit.Title3}
    color: ${({ $currentFloor, $color, $itemFloor }) => 
      $currentFloor > $itemFloor
      ? LegacyPalette.labelDisabled
      : $color};
    border: ${({ $currentFloor, $color, $itemFloor }) => 
      $currentFloor > $itemFloor
      ? LegacyPalette.lineNeutral
      : $color} 1px solid;
    border-radius: 8px;
  }
`

export const TrialController = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width: 1230px) {
    padding: 0 48px;
  }
  @media (max-width: 1155px) {
    padding: 0 72px;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 108px;
  gap: 12px;
`

export const TrialCurrentFloor = styled.div`
  display: flex;
  gap: 6px;
  white-space: nowrap;
  ${LegacyTypography.BitBit.Title2}
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.BitBit.Title2}
    color: ${LegacyPalette.primaryNormal};
  }
`

export const TrialButtonText = styled.p<{ $color: string }>`
  ${LegacyTypography.Pretendard.Headline.Medium};
  color: ${({ $color }) => $color};
`

