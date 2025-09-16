import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { AchievementValueType } from "@src/types/achievement/achievement.type";
import styled from "styled-components";

export const AchievementDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
  width: 280px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  color: ${LegacyPalette.labelNormal};
  white-space: nowrap;
  flex-shrink: 0;
  @media (max-width: 1080px) {
    width: 240px;
  }
  @media (max-width: 740px) {
    width: 200px;
  }
`;

export const AchievementDetailHeader = styled.div<{
  $valueType: AchievementValueType;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 120px;
    aspect-ratio: 1 / 1;
    background-color: ${LegacyPalette.fillNeutral};
    border-radius: 12px;
    margin-bottom: 12px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-wrap: wrap;
    > p {
      ${LegacyTypography.Pretendard.Title3.Bold}

      @media (max-width: 1080px) {
        ${LegacyTypography.Pretendard.Heading2.Bold}
      }
      white-space: normal;
      text-align: center;
    }
    > span {
      ${LegacyTypography.Pretendard.Heading1.Regular}
      @media (max-width: 1080px) {
        ${LegacyTypography.Pretendard.Headline.Regular}
      }
      color: ${({ $valueType }) =>
        $valueType === "EXPLORE"
          ? LegacySementic.blue.netural
          : $valueType === "LEVEL"
          ? LegacySementic.red.netural
          : LegacyPalette.primaryNormal};
    }
    margin-bottom: 4px;
  }
  > p {
    white-space: normal;
    text-align: center;
    ${LegacyTypography.Pretendard.Body2.Regular}
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const AchievementDetailMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      color: ${LegacyPalette.labelNeutral};
      ${LegacyTypography.Pretendard.Body2.Regular};
    }

    > span {
      color: ${LegacyPalette.labelNeutral};
      ${LegacyTypography.Pretendard.Body2.Bold};
    }
  }
`;

export const AchievementRate = styled.div<{
  $goal: "true" | "false",
  $valueType: AchievementValueType,
}>`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Body2.Bold};
  color: ${({ $goal, $valueType }) => $goal === "true" ? (
    $valueType === "LEVEL"
    ? LegacySementic.blue.netural
    : $valueType === "EXPLORE" 
    ? LegacySementic.red.netural 
    : LegacyPalette.primaryNormal
  ) : LegacyPalette.labelNormal};
`;

export const AchievementDetailAwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${LegacyPalette.labelNeutral};
  ${LegacyTypography.Pretendard.Body2.Regular};
  width: 100%;
`;