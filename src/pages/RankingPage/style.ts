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
  color: ${LegacyPalette.labelNormal};
  flex-grow: 1;

  > header {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background-color: ${LegacyPalette.backgroundNormal};
    ${LegacyTypography.BitBit.Title2};
  }
`;

export const RankingPageMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  overflow-y: scroll;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 20px;
  border-radius: 20px;
`;

export const RankingPageFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 4px;
  }
`