import { LegacyPalette } from "@src/constants/color/color";
import styled, { CSSObject } from "styled-components";


export const ButtonHover = styled.div<{
  $width: string;
}>`
  width: ${({ $width }) => $width};
  > :hover {
    transform: scale(1.02);
  }
`

export const ButtonWrapper = styled.div<{
  $isAtv: boolean | undefined;
  $color: string;
  $width: string;
  $customStyle?: CSSObject;
}>`
  width: ${({ $width }) => $width};
  height: fit-content;
  padding: 4px;
  box-shadow: ${({ $isAtv, $color }) =>
    $isAtv ? `0px 0px 8px 0px ${$color}` : "none"};
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 12px;
  cursor: pointer;
  ${({ $customStyle }) => $customStyle};
`;

export const ButtonContainer = styled.div<{
  $size: "small" | "big" | "default";
  $color: string;
  $isBold: boolean;
  $isFilled: boolean;
  $customStyle?: CSSObject;
}>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $size }) =>
    $size === "small" ? "4px 12px" : $size === "big" ? "12px 12px" : "8px 12px"};
  border-radius: 8px;
  border: solid 1px;
  border-color: ${({ $isBold, $color }) =>
    $isBold ? $color : LegacyPalette.lineAlternative};
  background-color: ${({ $isBold, $isFilled, $color }) =>
    $isBold
      ? $isFilled && $color
      : $isFilled && LegacyPalette.lineAlternative};
  ${({ $customStyle }) => $customStyle}
`;
