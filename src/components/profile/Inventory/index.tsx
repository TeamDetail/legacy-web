import { useState } from "react";
import InventoryList from "./InventoryList";
import * as S from "./style";
import { ItemType } from "@src/types/inventory/inventory.type";
import ItemInfo from "./ItemInfo";
import ItemQuantitySelectModal from "./ItemQuantitySelectModal";
import { CardResponse } from "@src/types/card/card.type";
import useModalStore from "@src/store/useModalStore";
import ReceivedItemModal from "./ReceivedItemModal";

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType>();

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
                  selectedItem={selectedItem!}
                  handleReceiveItem={(data: CardResponse[]) => {
                    setOpenModal(
                      <ReceivedItemModal
                        close={setCloseModal}
                        receivedCardData={data}
                        selectedItem={selectedItem!}
                      />
                    );
                  }}
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
