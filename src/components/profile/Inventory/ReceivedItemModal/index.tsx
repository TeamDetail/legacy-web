import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { CardResponse } from "@src/types/card/card.type";
import { ItemType } from "@src/types/inventory/inventory.type";
import styled from "styled-components";
import LeftArrow from "@src/assets/arrowLeft.svg?react";
import RightArrow from "@src/assets/arrowRight.svg?react";
import { useState } from "react";
import Card from "@components/common/Card";
import LegacyButton from "@components/common/LegacyButton";

const ReceivedItemModal = ({
  receivedCardData,
  selectedItem,
  close,
}: {
  receivedCardData: CardResponse[];
  selectedItem: ItemType;
  close: () => void;
}) => {
  const [page, setPage] = useState(0);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < receivedCardData.length - 1) {
      setPage(page + 1);
    }
  };

  return (
    <ReceivedItemModalContainer>
      <ReceivedItemModalHeader>
        카드획득!<span>~ {selectedItem.itemName} ~</span>
      </ReceivedItemModalHeader>
      <ArrowButton
        className="prev-arrow"
        onClick={handlePrevPage}
        disabled={page === 0}
      >
        <LeftArrow
          fill={
            page === 0 ? LegacyPalette.labelDisabled : LegacyPalette.labelNormal
          }
        />
      </ArrowButton>
      <ArrowButton
        className="next-arrow"
        onClick={handleNextPage}
        disabled={page === receivedCardData.length - 1}
      >
        <RightArrow
          fill={
            page === receivedCardData.length - 1
              ? LegacyPalette.labelDisabled
              : LegacyPalette.labelNormal
          }
        />
      </ArrowButton>
      <ReceivedItemModalMain>
        <CardContainer currentPage={page} totalCards={receivedCardData.length}>
          {receivedCardData.map((cardData, index) => (
            <Card
              key={cardData.cardId || index}
              cardType="BASIC_CARD"
              size="L"
              cardId={cardData.cardId}
              nationAttributeName={cardData.nationAttributeName}
              regionAttributeName={cardData.regionAttributeName}
              lineAttributeName={cardData.lineAttributeName}
              cardName={cardData.cardName}
              cardImageUrl={cardData.cardImageUrl}
              canInteract={false}
              isAtv={false}
              handleCardChange={() => {}}
            />
          ))}
        </CardContainer>
      </ReceivedItemModalMain>
      <PageIndicator>
        {page + 1} / {receivedCardData.length}
      </PageIndicator>
      {page + 1 === receivedCardData.length && (
        <LegacyButton
          isBold={false}
          isFilled={false}
          size="default"
          color={LegacyPalette.labelAlternative}
          children={<ButtonText>획득 완료하고 닫기</ButtonText>}
          handleClick={close}
        />
      )}
    </ReceivedItemModalContainer>
  );
};

export default ReceivedItemModal;

const ReceivedItemModalContainer = styled.div`
  width: 300px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
  position: relative;
  border-radius: 20px;
`;

const ReceivedItemModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${LegacyTypography.Pretendard.Title2.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Bold};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const ReceivedItemModalMain = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 280px;
`;

const CardContainer = styled.div<{ currentPage: number; totalCards: number }>`
  display: flex;
  gap: 28px;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(
    ${({ totalCards, currentPage }) =>
      (totalCards * 200 + (totalCards - 1) * 28) / 2 -
      100 -
      currentPage * (200 + 28)}px
  );
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  z-index: 10;
  border-radius: 999px;
  background-color: ${LegacyPalette.fillNormal};

  &.prev-arrow {
    left: 8px;
  }

  &.next-arrow {
    right: 8px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

const PageIndicator = styled.div`
  text-align: center;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacyPalette.labelNeutral};
`;
