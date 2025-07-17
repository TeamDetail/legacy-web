import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const RankingListContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
`

export const RankingHeader = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
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
  width: 64px;
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
  padding: 0 24px;
  gap: 8px;
  align-items: center;

  span {
    color: ${LegacyPalette.labelAlternative};
  }

  img {
    border-radius: 999px;
    width: 48px;
    height: 48px;
    background: cover;
  }

  section {
    display: flex;
    flex-direction: column;
    p {
      ${LegacyTypography.Pretendard.Headline.Bold}
    }
  }
`

export const RankingScore = styled.div`
  display: flex;
  width: 160px;
  height: 100%;
  padding: 0 24px;
  gap: 4px;
  align-items: center;

  span {
    color: ${LegacyPalette.labelAlternative};
  }

  p {
    ${LegacyTypography.Pretendard.Headline.Bold}
  }
`