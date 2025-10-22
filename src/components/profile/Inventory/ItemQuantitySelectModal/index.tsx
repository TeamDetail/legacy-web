import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import ArrowUp from "@src/assets/arrow-up.svg?react";
import ArrowDown from "@src/assets/arrow-down.svg?react";
import LegacyButton from "@components/common/LegacyButton";
import { ItemType } from "@src/types/inventory/inventory.type";
import { Dispatch, SetStateAction, useState } from "react";
import inventoryApi from "@src/api/inventory/inventory.api";
import { toast } from "react-toastify";
import { CardResponse } from "@src/types/card/card.type";
import { useQueryClient } from "@tanstack/react-query";

const ItemQuantitySelectModal = ({
  close,
  selectedItem,
  setSelectedItem,
  handleReceiveItem,
}: {
  close: () => void;
  selectedItem: ItemType;
  setSelectedItem: Dispatch<SetStateAction<ItemType | undefined>>;
  handleReceiveItem: (data: CardResponse[]) => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const queryClient = useQueryClient();

  const handleCheckButtonClick = async () => {
    if (quantity === 0) {
      toast.error("최소 1개 이상을 사용해야합니다.");
    }
    try {
      if (selectedItem.itemType === "CARD_PACK") {
        const data = await inventoryApi.openCardpack(
          selectedItem.itemId,
          quantity
        );
        if (data) {
          close();
          handleReceiveItem(data);
          queryClient.invalidateQueries({ queryKey: ["getMyInventory"] });
          setSelectedItem(undefined);
        }
      } else if (selectedItem.itemType === "CREDIT_PACK") {
        const data = await inventoryApi.openCreditpack(
          selectedItem.itemId,
          quantity
        );
        if (data) {
          close();
          toast.success(`${data.addedCredit} 크레딧을 획득하였습니다.`);
          queryClient.invalidateQueries({ queryKey: ["getMyInventory"] });
          setSelectedItem(undefined);
        }
      }
    } catch {
      close();
      toast.error("아이템 사용 실패!");
    }
  };

  return (
    <ItemQuantitySelectModalContainer>
      사용할 개수 선택
      <QuantityInputContainer>
        <div onClick={() => setQuantity((prev) => prev - 1)}>
          <ArrowDown width={36} height={36} />
        </div>
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            if (e.target.value === "") {
              setQuantity(0);
            } else {
              setQuantity(Number(e.target.value));
            }
          }}
        />
        <div onClick={() => setQuantity((prev) => prev + 1)}>
          <ArrowUp />
        </div>
      </QuantityInputContainer>
      <ButtonWrapper>
        <LegacyButton
          isBold
          isFilled={false}
          size="default"
          color={LegacyPalette.labelAssistive}
          children={<ButtonText $buttonType="cancel">취소</ButtonText>}
          handleClick={close}
          width="100%"
        />
        <LegacyButton
          isBold
          isFilled={false}
          size="default"
          color={LegacySementic.purple.normal}
          children={<ButtonText $buttonType="check">확인</ButtonText>}
          width="100%"
          handleClick={handleCheckButtonClick}
        />
      </ButtonWrapper>
    </ItemQuantitySelectModalContainer>
  );
};

export default ItemQuantitySelectModal;

const ItemQuantitySelectModalContainer = styled.div`
  width: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  align-items: center;
  border-radius: 20px;
`;

const QuantityInputContainer = styled.div`
  padding: 8px 0;
  display: flex;
  gap: 12px;
  align-items: center;
  input {
    width: 100px;
    border: none;
    border-radius: 12px;
    background-color: ${LegacyPalette.fillNormal};
    padding: 8px 20px;
    ${LegacyTypography.Pretendard.Title1.Bold};
    color: ${LegacyPalette.labelNormal};
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: ${LegacyPalette.fillNormal};
    border-radius: 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const ButtonText = styled.div<{ $buttonType: "cancel" | "check" }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${({ $buttonType }) =>
    $buttonType === "cancel"
      ? LegacyPalette.labelAssistive
      : LegacySementic.purple.normal};
`;
