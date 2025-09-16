import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import ShopBackground from "@src/assets/backgroundShop.svg";

export const ShopPageContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 63.28%, #7d383a 100%);
  padding: 28px;
`;

export const ShopPageMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  color: ${LegacyPalette.labelNormal};
  flex-grow: 1;
  overflow: hidden;
  min-height: 0;

  > header {
    display: flex;
    gap: 12px;
    ${LegacyTypography.BitBit.Title2};
    align-items: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-image: url(${ShopBackground});
    background-repeat: repeat;
    background-size: auto; /* 필요하면 cover, contain, px 값으로 조절 가능 */
    transform: rotate(-28deg);
    transform-origin: center;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const ShopPageMain = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  gap: 12px;
  overflow: hidden;
`;
