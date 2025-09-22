import { useState } from "react";
import InventoryList from "./InventoryList";
import * as S from "./style";
import { ItemType } from "@src/types/inventory/inventory.type";
import ItemInfo from "./ItemInfo";
import ItemQuantitySelectModal from "./ItemQuantitySelectModal";
import { CardResponse } from "@src/types/card/card.type";
import ReceivedCardModal from "./ReceivedItemModal";
import useModalStore from "@src/store/useModalStore";

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const [receivedCard, setReceivedCard] = useState<CardResponse[]>();

  const { setOpenModal, setCloseModal } = useModalStore();

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
            setIsQuantitySelectModalOpen={() =>
              setOpenModal(
                <ItemQuantitySelectModal
                  close={setCloseModal}
                  openReceivedCardModal={() =>
                    setOpenModal(
                      <ReceivedCardModal
                        close={setCloseModal}
                        receivedCardData={receivedCard!}
                        selectedItem={selectedItem!}
                      />
                    )
                  }
                  selectedItem={selectedItem!}
                  handleReceiveItem={(data: CardResponse[]) =>
                    setReceivedCard(data)
                  }
                />
              )
            }
          />
        )}
      </S.InventoryContainer>
    </>
  );
};

export default Inventory;
