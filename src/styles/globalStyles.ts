import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    a {
      text-decoration: none;
    }
`;

export default GlobalStyles;

export const PageContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  padding: 28px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  gap: 12px;
`;

export const HeaderContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  gap: 12px;
  width: 100%;
  min-height: 80px;
  align-items: center;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  grid-area: header;
  ${LegacyTypography.BitBit.Title2};
  color: ${LegacyPalette.labelNormal};
`