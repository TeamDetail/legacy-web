import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const DailyDataContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const DailyDataWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const DailyCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > header {
    display: flex;
    justify-content: space-between;

    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }

  > div {
    width: 320px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 8px;
  }
`;

export const DailyCalendarItem = styled.button<{
  $isSelected: boolean;
}>`
  aspect-ratio: 1/1;
  background-color: ${({ $isSelected }) =>
    $isSelected ? LegacyPalette.primaryNormal : LegacyPalette.fillNormal};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Body2.Bold};
  color: ${LegacyPalette.labelNormal};
  border: none;

  &:disabled {
    background-color: ${LegacyPalette.fillNeutral};
    color: ${LegacyPalette.labelAssistive};
  }
`;

export const DailyRewardContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DailyRewardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px;
  gap: 8px;

  ${LegacyTypography.Pretendard.Body2.Bold};
  color: ${LegacyPalette.labelNormal};

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const ButtonText = styled.div<{ $disabled: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${({ $disabled }) =>
    $disabled ? LegacyPalette.labelDisabled : LegacyPalette.primaryNormal};
`;
