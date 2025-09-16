import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { AchievementValueType } from "@src/types/achievement/achievement.type";
import styled from "styled-components";

export const AchievementHover = styled.div`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  cursor: pointer;
  > div:hover {
    background-color: ${LegacyPalette.fillNormal};
  }
`;

export const AchievementItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 8px;
  border-radius: 12px;
  gap: 12px;
  background-color: transparent;
  color: ${LegacyPalette.labelNormal};
  transition: all 0.08s linear;
`;

export const AchievementImg = styled.img`
  width: 72px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: ${LegacyPalette.fillNeutral};
  outline: none;
  border: none;
`

export const AchievementContents = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`

export const AchievementHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  > div {
    display: flex;
    gap: 4px;
    align-items: center;
    > p {
      ${LegacyTypography.Pretendard.Headline.Bold}
    }
    > span {
      ${LegacyTypography.Pretendard.Body2.Medium}
      color: ${LegacySementic.red.normal};
    }
  }
  > p {
    ${LegacyTypography.Pretendard.Caption1.Regular}
    color: ${LegacyPalette.labelAlternative};
  }
`
export const AchievementMoreInfo = styled.div`
  display: flex;
  gap: 4px;
  p {
    ${LegacyTypography.Pretendard.Caption1.Regular};
    color: ${LegacyPalette.labelAlternative};
  }
  span {
    ${LegacyTypography.Pretendard.Caption1.Bold};
  }
`;

export const AchievementRate = styled.div<{
  $goal: "true" | "false",
  $valueType: AchievementValueType,
}>`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${({ $goal, $valueType }) => $goal === "true" ? (
    $valueType === "EXPLORE" ? LegacySementic.blue.netural : $valueType === "LEVEL" ? LegacySementic.red.netural : LegacyPalette.primaryNormal
  ) : LegacyPalette.labelNormal};
`;