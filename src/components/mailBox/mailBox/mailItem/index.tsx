import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface MailItemProps {
  mailTitle: string;
  sendAt: string;
  isSelected: boolean;
  onClick: () => void;
}

const MailItem = ({
  mailTitle,
  sendAt,
  isSelected,
  onClick,
}: MailItemProps) => (
  <MailItemContainer $isSelected={isSelected} onClick={onClick}>
    {mailTitle}
    <span>{sendAt}</span>
  </MailItemContainer>
);

export default MailItem;

const MailItemContainer = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  background-color: ${({ $isSelected }) =>
    $isSelected && LegacyPalette.fillNormal};
  gap: 2px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${({ $isSelected }) =>
    $isSelected ? LegacyPalette.labelNormal : LegacyPalette.labelNeutral};
  cursor: pointer;
  border-radius: 8px;

  span {
    ${LegacyTypography.Pretendard.Caption2.Medium}
    color: ${LegacyPalette.labelAlternative};
  }

  &:hover {
    background-color: ${({ $isSelected }) =>
      !$isSelected && LegacyPalette.backgroundNeutral};
    transition: 0.15s linear;
  }
`;
