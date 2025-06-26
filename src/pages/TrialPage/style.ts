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

export const TiralSidebar = styled.section<{
  $isLoading: string;
}>`
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
  transition: all 0.18s ease-out;
  transform: ${({ $isLoading }) => $isLoading === "false" ? "" : "translateX(270px)"};
`