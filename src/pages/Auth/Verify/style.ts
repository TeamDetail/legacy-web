import styled from "styled-components";
import Img from "@src/assets/loginImage.svg";
import KakaoImg from "@src/assets/kakao-svgrepo-com 1.svg";
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
  width: 45%;
  height: 50%;
  //bg-normal
  background-color: #1c1c1e;
  //large
  border-radius: 20px;
  display: flex;
  overflow: hidden;
`;

export const LoginImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  background-size: cover;
  background-position: center;
`;

export const Center = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column20 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 32px;
  background-color: #fee500;
  border-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`;

export const KakaoIcon = styled.img.attrs({ src: `${KakaoImg}` })`
  width: 12px;
  height: 12px;
`;

export const LoginButtonText = styled.p`
  flex: 1;
  font-size: 10px;
  font-weight: normal;
  color: ${LegacyPalette.staticBlack};
`;

export const Column12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & p {
    color: ${LegacyPalette.labelNormal};
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
`;
