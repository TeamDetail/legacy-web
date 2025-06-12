import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const TrialContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 12px;
  padding: 28px;
  background: linear-gradient(180deg, #111212 63.28%, #29002E 100%);
`
export const TiralSidebar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 240px;
  height: 100%;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  @media (max-width: 1155px) {
    display: none;
  }
`