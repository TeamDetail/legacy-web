import Item from "@components/common/Item";
import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { ItemType } from "@src/types/inventory/inventory.type";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const ReceiveItem = ({
  receiveItems,
  setReceiveItems,
}: {
  receiveItems: ItemType[];
  setReceiveItems: Dispatch<SetStateAction<ItemType[]>>;
}) => {
  return (
    <ReceiveItemContainer>
      보상 수령 완료!<span>우편함 보상을 모두 수령했어요!</span>
      <ItemContainer>
        {receiveItems.map((item, idx) => (
          <Item size="normal" itemType={item.itemType} key={idx}/>
        ))}
      </ItemContainer>
      <LegacyButton
        size="big"
        color={LegacyPalette.lineNeutral}
        isBold
        isFilled={false}
        width="100%"
        handleClick={() => setReceiveItems([])}
        children={<BeforeButtonText>돌아가기</BeforeButtonText>}
      />
    </ReceiveItemContainer>
  );
};

export default ReceiveItem;

const ReceiveItemContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  ${LegacyTypography.Pretendard.Title2.Bold};
  color: ${LegacySementic.yellow.netural};

  span {
    ${LegacyTypography.Pretendard.Headline.Medium};
    color: ${LegacyPalette.labelNeutral};
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 124px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;

  img {
    border: 1px solid ${LegacyPalette.lineAlternative};
    border-radius: 8px;
    width: 48px;
    height: 48px;
  }
`;

const BeforeButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelAssistive};
`;
