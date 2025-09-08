import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import Coin from "@src/assets/coin.svg?react";
import styled from "styled-components";

interface cardpackItemPropsType {
  cardpackName: string;
  cardpackText: string;
  cardpackCost: number;
  onPurchase: () => void;
}

const cardpackItem = ({
  cardpackCost,
  cardpackName,
  cardpackText,
  onPurchase,
}: cardpackItemPropsType) => {
  return (
    <CardpackItemContainer>
      <CardpackItemWrapper>
        {cardpackName}
        <Img />
        <span>{cardpackText}</span>
      </CardpackItemWrapper>
      <CostWrapper onClick={onPurchase}>
        <Coin width={14} height={14} />
        {cardpackCost}
      </CostWrapper>
    </CardpackItemContainer>
  );
};

export default cardpackItem;

const CardpackItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  border-radius: 12px;
  overflow: hidden;
`;

const CardpackItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px;
  gap: 8px;
  width: 100%;
  flex-grow: 1;
  ${LegacyTypography.BitBit.Caption2};
  color: ${LegacyPalette.labelNormal};

  span {
    font-family: "Pretendard-ExtraBold";
    font-size: 8px;
    line-height: 120%;
    letter-spacing: 0.36px;
    color: ${LegacyPalette.labelNormal};
    text-align: center;
  }
`;

const Img = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${LegacyPalette.fillNormal};
  border-radius: 8px;
`;

const CostWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  height: 28px;
  font-family: "DNFBitBitv2";
  font-size: 10px;
  line-height: 130%;
  letter-spacing: 0.36px;
  justify-content: center;
  align-items: center;
  background-color: ${LegacyPalette.fillNormal};
`;
