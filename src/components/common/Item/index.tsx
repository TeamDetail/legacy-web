import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import CardpackImg from "@src/assets/cardpackImg.png";
import { ItemEnumType } from "@src/types/inventory/inventory.type";

interface SizeType {
  normal: number;
  big: number;
  large: number;
  extra: number;
}

const iconSize: SizeType = {
  normal: 40,
  big: 48,
  large: 72,
  extra: 108,
};

const iconPadding: SizeType = {
  normal: 4,
  big: 6,
  large: 6,
  extra: 8,
};

const Item = ({
  size,
  onClick,
  isSelected,
  itemType,
}: {
  size: keyof SizeType;
  onClick: () => void;
  isSelected: boolean;
  itemType: ItemEnumType;
}) => {
  return (
    <ItemContainer $size={size} $isSelected={isSelected} onClick={onClick}>
      {itemType === "CARD_PACK" && <img src={CardpackImg}/>}
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div<{
  $size: keyof SizeType;
  $isSelected: boolean;
}>`
  width: ${({ $size }) => `${iconSize[$size]}px`};
  height: ${({ $size }) => `${iconSize[$size]}px`};
  padding: ${({ $size }) => `${iconPadding[$size]}px`};
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected
        ? LegacyPalette.primaryNormal
        : LegacyPalette.lineAlternative};
  border-radius: 12px;
  background-color: ${LegacyPalette.fillNormal};

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
