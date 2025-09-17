import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const OverViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

export const OverViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${LegacyTypography.Pretendard.Title1.Bold}
  color: ${LegacyPalette.labelNormal};
  > div {
    ${LegacyTypography.Pretendard.Body1.Medium}
  }
`

export const OverViewMainContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-grow: 1;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const OverViewSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 360px;

  section {
    color: ${LegacyPalette.labelNormal};
    max-width: 100%;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    background-color: ${LegacyPalette.fillNormal};
  }
`

export const OverViewMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`