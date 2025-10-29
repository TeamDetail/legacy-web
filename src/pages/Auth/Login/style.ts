import styled from "styled-components";
import Img from "@src/assets/loginImage.svg";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { LegacyPalette } from "@src/constants/color/color";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #111212 72.72%, #29002e 100%);
`;

export const LoginBox = styled.div`
  width: 55vw;
  height: 50%;
  background-color: ${LegacyPalette.backgroundNormal};
  //large
  border-radius: 20px;
  display: flex;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 800px) {
    width: fit-content;
  }
`;

export const LoginImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  background-size: cover;
  background-position: center;
`;

export const Center = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding: 64px;
  }
`;

export const Column20 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Column12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & p {
    color: ${LegacyPalette.staticWhite};
  }
`;

export const Normal14 = styled.p`
  ${LegacyTypography.BitBit.Label}
`;

export const Normal48 = styled.p`
  font-family: "DNFBitBitv2";
  font-size: 48px;
`;

export const Body2Bold = styled.p`
  ${LegacyTypography.Pretendard.Body2.Bold}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Gradient = styled.div`
  background: linear-gradient(90deg, rgba(28, 28, 30, 0) 21.41%, #1c1c1e 100%);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ImgBox = styled.div`
  width: 50%;
  height: 100%;
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`