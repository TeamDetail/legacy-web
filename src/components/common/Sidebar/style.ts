import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import ArrowDown from "@src/assets/arrowDown.svg?react";

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 100%;
  padding: 24px 20px;
  gap: 24px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  user-select: none;

  > p {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.BitBit.Title2}
  }

  @media (max-width: 840px) {
    max-width: 96px;
    min-width: 96px;

    > p {
      display: none;
    }
  }
`;

export const SidebarUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  & img {
    border-radius: 999px;
    width: 56px;
    height: 56px;
  }

  & section {
    display: flex;
    flex-direction: column;

    & p {
      ${LegacyTypography.Pretendard.Caption1.Bold}
      color: ${LegacyPalette.labelAlternative};
    }
  }
`;

export const SidebarUserName = styled.div`
  white-space: nowrap;

  ${LegacyTypography.Pretendard.Headline.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export const SidebarButtonMenu = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const SidebarMenuChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;

  gap: 8px;
  p {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.Pretendard.Body2.Bold};

    @media (max-width: 840px) {
      display: none;
    }
  }

  @media (max-width: 840px) {
    justify-content: center;
  }
`;

export const ViewMoreMenuContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;

  > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 8px;
    background-color: transparent;
    border: none;
    white-space: nowrap;
    > p , div {
      color: ${LegacyPalette.labelNormal};
      ${LegacyTypography.Pretendard.Body2.Bold};
      @media (max-width: 840px) {
        display: none;
      }
    }
  }
  @media (max-width: 840px) {
      justify-content: center;
    }
`;

export const ViewMoreMenuArrowDown = styled(ArrowDown)<{
  $isViewMoreMenuOpen: string;
}>`
  width: 20px;
  height: 20px;
  transform: ${({ $isViewMoreMenuOpen }) =>
    `scaleY(${$isViewMoreMenuOpen === "true" ? 1 : -1})`};
  @media (max-width: 840px) {
    display: none;
  }
`;

export const ViewMoreMenuButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > :hover {
    transform: scale(1.02);
    background-color: ${LegacyPalette.fillAlternative};
  }
`;

export const ViewMoreMenuButton = styled.button<{ $isAtv: "true" | "false" }>`
  padding: 4px 8px 4px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ $isAtv }) =>
    $isAtv === "true" ? LegacyPalette.fillAlternative : "transparent"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  p {
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Caption1.Medium};
    @media (max-width: 840px) {
      display: none;
    }
  }

  @media (max-width: 840px) {
    padding: 0;
  }

  @media (min-width: 840px) {
    :nth-child(1) {
      display: none;
    }
  }
`;
