import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import styled from "styled-components";

export const InputWrapper = styled.div<{
  $color: keyof typeof LegacySementic;
}>`
  width: 172px;
  height: fit-content;
  padding: 4px;
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 12px;
`;

export const InputContainer = styled.input<{
  $size: "small" | "big" | "default";
  $color: keyof typeof LegacySementic;
  $isBold: boolean;
  $isFilled: boolean;
}>`
  background-color: ${LegacyPalette.fillNormal};
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ $size }) =>
    $size === "small" ? "4px" : $size === "big" ? "12px" : "8px"};
  padding-bottom: ${({ $size }) =>
    $size === "small" ? "4px" : $size === "big" ? "12px" : "8px"};
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 8px;
  border: solid 1px;
  border-color: ${({ $isBold, $color }) =>
    $isBold ? LegacySementic[$color].netural : LegacyPalette.lineAlternative};
  background-color: ${({ $isBold, $isFilled, $color }) =>
    $isBold
      ? $isFilled && LegacySementic[$color].netural
      : $isFilled && LegacyPalette.lineAlternative};
  color: ${LegacyPalette.labelNormal};
`;
