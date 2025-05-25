import { LegacyPalette, LegacySementic } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken"
import styled from "styled-components"

type CardTagType = "NATION" | "REGION" | "LINE";
type CardSize = "L" | "M" | "S";

interface CardTagProps {
  text: string;
  type: CardTagType;
  size: CardSize;
}

const CardTag = ({text, type, size}: CardTagProps) => {
  return (
    <CardTagContainer $type={type} $size={size}>{text}</CardTagContainer>
  )
}

const CardTagContainer = styled.div<{ $type: CardTagType, $size: CardSize}>`
  width: fit-content;
  height: fit-content;
  padding: 2px 12px;
  user-select: none;
  ${({ $size }) => $size === "S" ? LegacyTypography.Pretendard.Caption2.Bold : LegacyTypography.Pretendard.Label.Bold}
  background-color: ${({ $type }) =>
    $type === "NATION"
      ? LegacyPalette.primaryNormal
      : $type === "REGION"
      ? LegacySementic.blue.netural
      : LegacySementic.red.netural};
  border-radius: 999px;
  color: ${LegacyPalette.labelNormal};
`;

export default CardTag