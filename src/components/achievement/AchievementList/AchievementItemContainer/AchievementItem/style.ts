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
  white-space: nowrap;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  @media (max-width: 960px) {
    flex-direction: row;
  }

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

export const AchievementImg = styled.img`
  width: 72px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: ${LegacyPalette.fillNeutral};
`

export const AchievementContents = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`

export const AchievementHeader = styled.div<{
  $valueType: AchievementValueType;
}>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  > div {
    display: flex;
    gap: 4px;
    align-items: center;
    flex-wrap: wrap;
    > p {
      white-space: normal;
      ${LegacyTypography.Pretendard.Headline.Bold}
    }
    > span {
      ${LegacyTypography.Pretendard.Body2.Medium}
      color: ${({ $valueType }) => 
        $valueType === "EXPLORE"
        ? LegacySementic.blue.netural
        : $valueType === "LEVEL"
        ? LegacySementic.red.normal
        : $valueType === "HIDDEN"
        ? LegacyPalette.primaryNormal
        : LegacyPalette.primaryNormal};
    }
  }
  > p {
    ${LegacyTypography.Pretendard.Caption1.Regular}
    color: ${LegacyPalette.labelAlternative};
    white-space: break-spaces;
  }
`;

export const AchievementMoreInfoContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 960px) {
    flex-direction: column;
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
    $valueType === "LEVEL"
    ? LegacySementic.blue.netural
    : $valueType === "EXPLORE" 
    ? LegacySementic.red.netural 
    : LegacyPalette.primaryNormal
  ) : LegacyPalette.labelNormal};
`;