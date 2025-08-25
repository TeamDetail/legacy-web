import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const SelectContainer = styled.div`
  width: min-content;
  height: 40px;

  display: flex;
  align-items: center;
  padding: 0px 12px;
  position: relative;
  column-gap: 15px;
  cursor: pointer;
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 12px;
  > p {
    ${LegacyTypography.Pretendard.Body1.Medium}
    white-space: nowrap;
    color: ${LegacyPalette.labelNormal};
  }
`;

export const SelectIcon = styled.div<{ close: "true" | "false" }>`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${LegacyPalette.labelNormal};
  transition: all 0.3s ease;

  ${({ close }) => close === "false" && "transform: rotate(180deg)"}
`;

export const SelectItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 44px;
  left: 0px;

  overflow: hidden;
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 12px;
  box-sizing: border-box;
`;

export const SelectItem = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 10px;
  ${LegacyTypography.Pretendard.Caption1.Medium}
  color: ${LegacyPalette.labelNormal};

  :hover {
    filter: brightness(90%);
  }
`;
