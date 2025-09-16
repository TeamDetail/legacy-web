import Item from "@components/common/Item";
import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { ItemType } from "@src/types/inventory/inventory.type";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const ItemInfo = ({
  item,
  setIsQuantitySelectModalOpen,
}: {
  item: ItemType;
  setIsQuantitySelectModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ItemInfoContainer>
      <Item size="extra" onClick={() => {}} isSelected={false} />
      <ItemInfoWrapper>
        <div>
          {item.itemName}
          <span>{item.itemCount}개 보유</span>
        </div>
        {item.itemDescription}
      </ItemInfoWrapper>
      <LegacyButton
        isFilled={false}
        isBold={false}
        size="big"
        color={LegacyPalette.lineAlternative}
        children={<ButtonText>사용하기</ButtonText>}
        handleClick={() => setIsQuantitySelectModalOpen(true)}
      />
    </ItemInfoContainer>
  );
};

export default ItemInfo;

const ItemInfoContainer = styled.div`
  width: 320px;
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNeutral};
  border-radius: 20px;
  border: 1px solid ${LegacyPalette.lineNeutral};
`;

const ItemInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Regular};
  color: ${LegacyPalette.labelNeutral};

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    ${LegacyTypography.Pretendard.Title2.Bold};
    color: ${LegacyPalette.labelNormal};

    span {
      ${LegacyTypography.Pretendard.Caption1.Medium};
      color: ${LegacyPalette.primaryNormal};
    }
  }
`;

const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNeutral};
`;
