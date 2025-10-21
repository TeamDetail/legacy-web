import { Suspense, useState } from "react";
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
        <Suspense fallback={<S.InventorySkeleton/>}>
          <InventoryList
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Suspense>
        {selectedItem && (
          <ItemInfo
            item={selectedItem}
            setIsQuantitySelectModalOpen={() =>
              setOpenModal({
                element: (
                  <ItemQuantitySelectModal
                    close={setCloseModal}
                    selectedItem={selectedItem!}
                    handleReceiveItem={(data: CardResponse[]) => {
                      setOpenModal({
                        element: (
                          <ReceivedItemModal
                            close={setCloseModal}
                            receivedCardData={data}
                            selectedItem={selectedItem!}
                          />
                        ),
                        key: "receivedItemModal",
                      });
                    }}
                  />
                ),
                key: "itemQuantitySelectModal",
              })
            }
          />
        )}
      </S.InventoryContainer>
    </>
  );
};

export default Inventory;
