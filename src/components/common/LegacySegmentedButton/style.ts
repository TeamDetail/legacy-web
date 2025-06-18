import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography, typographyType } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const SegmentedButtonContainer = styled.div<{
  $width: string;
  $height: string;
  $customBackbgroundColor?: string;
}>`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $customBackbgroundColor }) => $customBackbgroundColor || LegacyPalette.fillNormal};
  border-radius: 12px;
  padding: 4px;
  gap: 4px;
  > :hover {
    /* opacity: 0.7; */
    filter: brightness(0.92);
  }
`

export const SegmentedButtonItem = styled.div<{
  $isAtv: boolean;
  $customBtnColor?: string;
  $customBtnTextColor?: string;
  $customBtnTextType: ["BitBit" | "Pretendard", typographyType];
}>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  border-radius: 8px;

  background-color: ${({ $isAtv, $customBtnColor }) => 
    $isAtv 
    ? $customBtnColor || LegacyPalette.primaryNormal 
    : "transparent"};
  
  color: ${({ $isAtv, $customBtnTextColor }) => 
    $isAtv
    ? $customBtnTextColor || LegacyPalette.labelNormal
    : LegacyPalette.labelDisabled};
  
  cursor: pointer;
  user-select: none;

  ${({ $customBtnTextType }) =>
  $customBtnTextType[0] === "Pretendard"
  ? LegacyTypography.Pretendard[$customBtnTextType?.[1][0] || "Body1"][$customBtnTextType?.[1][1] || "Regular"]
  : LegacyTypography.BitBit[$customBtnTextType?.[1][0] || "Body1"]};
  
  transition: background-color 0.1s ease-out;

  border: 2px solid ${({ $isAtv }) =>
  $isAtv
  ? "transparent"
  : LegacyPalette.lineAlternative};
`