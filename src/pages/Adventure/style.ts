import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const BackStage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const GoogleMapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  top: 28px;
  left: 28px;
  z-index: 2;
`;

export const InfoPopup = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
  z-index: 3;
`;

export const QuizPopupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 4;
  background-color: rgba(28, 28, 30, 0.5);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  top: 28px;
  right: 28px;
  z-index: 3;
  width: 240px;
`;

export const AdventureMenuContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  gap: 12px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;

  div {
    padding: 4px 8px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${LegacyPalette.fillNormal};
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const WarningMessageWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  border-radius: 20px;
  position: absolute;
  top: 28px;
  left: 256px;
  background-color: #f06969c8;
  z-index: 3;
  align-items: center;

  @media (max-width: 840px) {
    left: 132px;
  }
  p {
    ${LegacyTypography.Pretendard.Caption2.Bold};
    color: ${LegacyPalette.labelNormal};
  }
`;
