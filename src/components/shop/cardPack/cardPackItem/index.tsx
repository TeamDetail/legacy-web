import { LegacyPalette } from "@src/constants/color/color";
import Coin from "@src/assets/coin.svg?react";
import styled from "styled-components";
import { LegacyModal } from "@components/common/LegacyModal";
import { useState } from "react";
import FinalPurchaseCheckModal from "./finalPurchaseCheckModal";

interface cardpackItemPropsType {
  cardpackName: string;
  cardpackCost: number;
  onPurchase: () => Promise<void>;
}

const CardpackItem = ({
  cardpackCost,
  cardpackName,
  onPurchase,
}: cardpackItemPropsType) => {
  const [isFinalCheckOpen, setIsfinalCheckOpen] = useState<boolean>(false);

  return (
    <>
      <CardpackItemContainer onClick={() => setIsfinalCheckOpen(true)}>
        <CardpackItemWrapper>
          {cardpackName}
          <Img />
          <span>예비 텍스트</span>
        </CardpackItemWrapper>
        <CostWrapper>
          <Coin width={14} height={14} />
          {cardpackCost}
        </CostWrapper>
      </CardpackItemContainer>
      <LegacyModal isOpen={isFinalCheckOpen} $background>
        <FinalPurchaseCheckModal
          itemName={cardpackName}
          price={cardpackCost}
          close={() => setIsfinalCheckOpen(false)}
          onPurchase={onPurchase}
        />
      </LegacyModal>
    </>
  );
};

export default CardpackItem;

const CardpackItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1 / 1.114;
  width: 140px;
  height: auto; /* grid가 실제 높이 계산 가능 */
  cursor: pointer;
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
  font-family: "DNFBitBitv2";
  font-size: 1rem;
  line-height: 130%;
  letter-spacing: 0.39px;
  color: ${LegacyPalette.labelNormal};

  span {
    font-family: "Pretendard-ExtraBold";
    font-size: 8px;
    line-height: 120%;
    letter-spacing: 0.36px;
    visibility: hidden;
    text-align: center;
  }
`;

const Img = styled.div`
  width: 55%;
  aspect-ratio: 1 / 1;
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
