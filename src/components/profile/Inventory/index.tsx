import { useState } from "react";
import InventoryList from "./InventoryList";
import * as S from "./style";
import { ItemType } from "@src/types/inventory/inventory.type";
import ItemInfo from "./ItemInfo";
import { LegacyModal } from "@components/common/LegacyModal";
import ItemQuantitySelectModal from "./ItemQuantitySelectModal";
import { CardResponse } from "@src/types/card/card.type";
import ReceivedCardModal from "./ReceivedItemModal";

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const [isQuantitySelectModalOpen, setIsQuantitySelectModalOpen] =
    useState(false);
  const [receivedCard, setReceivedCard] = useState<CardResponse[]>();
  const [isReceivedCardModalOpen, setIsReceivedCardModalOpen] = useState(false);

  return (
    <>
      <S.InventoryContainer>
        <InventoryList
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        {selectedItem && (
          <ItemInfo
            item={selectedItem}
            setIsQuantitySelectModalOpen={setIsQuantitySelectModalOpen}
          />
        )}
      </S.InventoryContainer>
      <LegacyModal isOpen={isQuantitySelectModalOpen} $background>
        <ItemQuantitySelectModal
          close={() => setIsQuantitySelectModalOpen(false)}
          openReceivedCardModal={() => setIsReceivedCardModalOpen(true)}
          selectedItem={selectedItem!}
          handleReceiveItem={(data: CardResponse[]) => setReceivedCard(data)}
        />
      </LegacyModal>
      <LegacyModal isOpen={isReceivedCardModalOpen} $background>
        <ReceivedCardModal
          close={() => setIsReceivedCardModalOpen(false)}
          receivedCardData={receivedCard!}
          selectedItem={selectedItem!}
        />
      </LegacyModal>
    </>
  );
};

export default Inventory;
