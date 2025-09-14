import { useState } from "react";
import InventoryList from "./InventoryList";
import * as S from "./style";
import { ItemType } from "@src/types/inventory/inventory.type";
import ItemInfo from "./ItemInfo";

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType>();

  return (
    <S.InventoryContainer>
      <InventoryList
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      {selectedItem && <ItemInfo item={selectedItem} />}
    </S.InventoryContainer>
  );
};

export default Inventory;
