import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const RankingListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const RankingHeader = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  overflow-x: scroll;
`

export const RankingItemHover = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  > :hover {
    background-color: ${LegacyPalette.fillNormal};
  }
`

export const RankingItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  border-radius: 8px;
  background-color: transparent;
  transition: all 0.1s linear;
`

export const RankIndicator = styled.p<{ $Rank: number }>`
  display: flex;
  width: 52px;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${({ $Rank }) => $Rank === 1
    ? LegacyPalette.primaryNormal
    : LegacyPalette.labelNormal};
  ${LegacyTypography.BitBit.Heading2}
`

export const RankingUserInfo = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  padding: 0 20px;
  gap: 8px;
  align-items: center;

  span {
    color: ${LegacyPalette.labelAlternative};
  }

  img {
    border-radius: 999px;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }

  section {
    display: flex;
    flex-direction: column;
    p {
      ${LegacyTypography.Pretendard.Headline.Bold}
    }
  }
`

export const RankingScoreContainer = styled.div`
  display: flex;
`
export const RankingScore = styled.div<{
  $size: "big" | "medium" | "small";
}>`
  display: flex;
  width: ${({ $size }) =>
    $size === "big" ? "160px" : $size === "medium" ? "152px" : "140px"};
  height: 100%;
  padding: 0 24px;
  gap: 4px;
  align-items: center;
  white-space: nowrap;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
      ${LegacyTypography.Pretendard.Heading2.Bold}
    }
    span {
      color: ${LegacyPalette.labelNeutral};
      ${LegacyTypography.Pretendard.Heading2.Medium}
    }
  }

  > span {
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const RankingNofriends = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 12px;
  color: ${LegacyPalette.primaryNormal};
  > p {
    ${LegacyTypography.Pretendard.Title3.Medium}
    color: ${LegacyPalette.labelNormal};
  }
`