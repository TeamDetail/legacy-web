import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import Close from "@src/assets/close.svg?react";
import Check from "@src/assets/check.svg?react";
import Send from "@src/assets/send.svg?react";

interface FriendActionButtonProps {
  type: "CHECK" | "CLOSE" | "SEND";
  handleButtonClick?: () => void;
}

const FriendActionButton = ({
  type,
  handleButtonClick,
}: FriendActionButtonProps) => {
  return (
    <IconButton $buttonType={type} onClick={handleButtonClick}>
      {type === "CHECK" ? (
        <Check width={20} />
      ) : type === "CLOSE" ? (
        <Close width={20} />
      ) : (
        <Send width={20} />
      )}
    </IconButton>
  );
};

export default FriendActionButton;

export const IconButton = styled.button<{
  $buttonType: "CHECK" | "CLOSE" | "SEND";
}>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${LegacyPalette.fillNormal};
  border-radius: 999px;
  border: none;
  cursor: pointer;
  padding: 8px;
  svg {
    fill: ${LegacyPalette.labelNeutral}; // 기본 색
  }

  &:hover svg {
    fill: ${({ $buttonType }) =>
      $buttonType === "CHECK"
        ? LegacyPalette.statusPositive
        : $buttonType === "CLOSE" && LegacyPalette.statusNegative};
  }
`;
