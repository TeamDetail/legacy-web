import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const AppleLoginButtonContainer = styled.button`
  width: 100%;
  height: 32px;
  background-color: #000;
  border-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  cursor: pointer;

  > p {
    ${LegacyTypography.Pretendard.Caption2.Medium}
    flex: 1;
    color: ${LegacyPalette.labelNormal};
  }
`;