import { LegacyPalette } from "@src/constants/color/color";
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
`;

export const RankingPageMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow-y: scroll;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 20px;
  border-radius: 20px;
  flex-grow: 1;
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