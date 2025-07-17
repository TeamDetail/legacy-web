import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
export const RankingPageContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 63.28%, #7D383A 100%);
  padding: 28px;
`

export const RankingPageMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  color: ${LegacyPalette.labelNormal};
  flex-grow: 1;

  > header {
    display: flex;
    gap: 12px;
    ${LegacyTypography.BitBit.Title2};
    align-items: center;
  }
`

export const RankingPageMain = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
  overflow-y: scroll;
`