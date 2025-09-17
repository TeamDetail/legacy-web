import Item from "@components/common/Item";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useInventory from "@src/hooks/inventory/useInventory";
import { ItemType } from "@src/types/inventory/inventory.type";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface InventoryListProps {
  selectedItem: ItemType | undefined;
  setSelectedItem: Dispatch<SetStateAction<ItemType | undefined>>;
}

const InventoryList = ({
  selectedItem,
  setSelectedItem,
}: InventoryListProps) => {
  const { myInventory } = useInventory();

  return (
    <>
      {myInventory ? (
        <InventoryListContainer>
          {myInventory!.map((item, idx) => (
            <Item
              key={idx}
              size="large"
              isSelected={item === selectedItem}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </InventoryListContainer>
      ) : (
        <EmptyInventoryMessage>
          아직 얻은 아이템이 없어요!
        </EmptyInventoryMessage>
      )}
    </>
  );
};

export default InventoryList;

const InventoryListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 72px);
  gap: 8px;
  align-items: start;
  align-content: start;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${LegacyPalette.lineAlternative};
`;

const EmptyInventoryMessage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid ${LegacyPalette.lineAlternative};
  display: flex;
  justify-content: center;
  align-items: center;

  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;
