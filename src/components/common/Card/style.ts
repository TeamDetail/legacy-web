import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { CardType } from "@src/types/card/card.type";
import styled from "styled-components";

export const CardWrap = styled.section<{ $isFocus: boolean }>`
  position: relative;
  width: fit-content;

  &:hover {
    animation: shake 0.35s ease-in-out infinite;
    z-index: 99;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg) scale(1.05);
    }
    25% {
      transform: rotate(-0.5deg) scale(1.05);
    }
    75% {
      transform: rotate(0.5deg) scale(1.05);
    }
    100% {
      transform: rotate(0deg) scale(1.05);
    }
  }
`;

export const CardContainer = styled.div<{
  $size: "L" | "M" | "S";
  $type: CardType;
  $imageUrl: string;
  $isFocus: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ $size }) =>
    $size === "L" ? "200px" : $size === "M" ? "160px" : "120px"};
  height: ${({ $size }) =>
    $size === "L" ? "280px" : $size === "M" ? "224px" : "168px"};

  padding: ${({ $size }) =>
    $size === "L" ? "12px" : $size === "M" ? "10px" : "8px"};

  border: ${({ $size }) =>
      $size === "L" ? "4px" : $size === "M" ? "4px" : "2.5px"}
    ${({ $type }) =>
      $type === "SHINING_CARD"
        ? LegacySementic.yellow.netural
        : LegacyPalette.lineNeutral}
    solid;
  border-radius: ${({ $size }) =>
    $size === "L" ? "20px" : $size === "M" ? "16px" : "12px"};

  background: no-repeat url(${({ $imageUrl }) => `${$imageUrl}`});
  background-size: cover;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  z-index: ${({ $isFocus }) => ($isFocus ? "30" : "20")};

  > p {
    ${LegacyTypography.BitBit.Body1};
    color: ${LegacyPalette.labelNormal};
    user-select: none;
  }

  ::after {
    content: "";
    position: absolute;
    background: ${LegacyPalette.fillNeutral};
    z-index: -1;
    inset: 0;
    opacity: 0.15;
    border-radius: ${({ $size }) =>
      $size === "L" ? "16px" : $size === "M" ? "12px" : "8px"};
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const CardTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardFocusMenu = styled.div<{ $isFocus: boolean }>`
  display: flex;
  position: absolute;
  flex-direction: column;
  right: -48px;
  top: 36px;
  width: 48px;
  height: fit-content;
  transform: ${({ $isFocus }) =>
    $isFocus ? "translateX(-4px)" : "translateX(-48px)"};
  opacity: ${({ $isFocus }) => ($isFocus ? 1 : 0)};
  visibility: ${({ $isFocus }) => ($isFocus ? "visible" : "hidden")};
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: ${({ $isFocus }) => ($isFocus ? "25" : "10")};
  gap: 4px;
`;

export const CardButton = styled.button<{
  $size: "L" | "M" | "S";
  $type: "ACCEPT" | "CLOSE";
}>`
  user-select: none;
  width: 48px;
  height: fit-content;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body1.Bold};
  background-color: ${LegacyPalette.primaryNormal};
  border: none;
  padding: ${({ $size }) =>
    $size === "L"
      ? "12px 12px 12px 8px"
      : $size === "M"
      ? "12px 12px 12px 8px"
      : "8px 8px 8px 4px"};
  border-radius: ${({ $size }) =>
    $size === "L"
      ? "0 16px 16px 0"
      : $size === "M"
      ? "0 12px 12px 0"
      : "0 8px 8px 0"};
  flex-shrink: 0; // 버튼이 줄어들지 않도록
  transition: transform 0.2s ease-out; // 버튼 자체에도 약간의 애니메이션

  &:hover {
    transform: scale(1.05);
  }
`;
