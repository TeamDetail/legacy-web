import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const ButtonWrapper = styled.div<{
  $isAtv: boolean | undefined;
  $color: string;
  $width: string;
}>`
  width: ${({ $width }) => $width};
  height: fit-content;
  padding: 4px;
  box-shadow: ${({ $isAtv, $color }) =>
    $isAtv ? `0px 0px 8px 0px ${$color}` : "none"};
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 12px;
  cursor: pointer;
  > :hover {
    transform: scale(1.05);
  }
`;

export const ButtonContainer = styled.div<{
  $size: "small" | "big" | "default";
  $color: string;
  $isBold: boolean;
  $isFilled: boolean;
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
`;
