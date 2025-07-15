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
  top: 2vw;
  left: 2vw;
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
