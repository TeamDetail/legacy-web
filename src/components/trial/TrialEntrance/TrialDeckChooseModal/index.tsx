import { LegacyModal } from "@components/common/LegacyModal";
import { CardResponse } from "@src/types/card/card.type";
import * as S from './style';
import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import LegacySegmentedButton from "@components/common/LegacySegmentedButton";
import { useState } from "react";
import { DUM_DECK } from "@src/constants/dummy/deck.dummy";
import { useSegmentedButton } from "@src/hooks/utils/useSegmentedButton";
import Card from "@components/common/Card";
import { LegacyTypography } from "@src/constants/font/fontToken";

interface TrialDeckChooseModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  choosedDeck: CardResponse[] | null;
  changeChooseDeck: (deck: CardResponse[]) => void;
}

const TrialDeckChooseModal = ({isModalOpen, closeModal}: TrialDeckChooseModalProps) => {
  const [deckTable] = useState<CardResponse[][]>(DUM_DECK);
  const { pageData, handleClickPage, choosedPageNumber } = useSegmentedButton([{ text: "덱 1", isAtv: true }, { text: "덱 2", isAtv: false }, { text: "덱 3", isAtv: false },]);

  // const handleChoosedDeck = () => {
  //   setChoosedDeckData();
  // }

  return (
    <LegacyModal isOpen={isModalOpen} $background>
      <S.TrialDeckChooseContainer>
        <LegacySegmentedButton
          data={pageData}
          onClick={() => void(0)}
          changePage={handleClickPage}
          width="100%"
        />
        <S.DeckCardContainer>
        {deckTable[choosedPageNumber].map(card => (
          <Card
            cardId={card.cardId}
            cardName={card.name}
            cardImageUrl={card.imageUrl}
            nationAttributeName={card.nationAttributeName}
            lineAttributeName={card.lineAttributeName}
            regionAttributeName={card.regionAttributeName}
            cardType={card.cardType}
            canInteract={false}
            isAtv={false}
            handleCardChange={() => void(0)}
          />
        ))}
        </S.DeckCardContainer>
        <S.DeckChooseButtonContainer>
        <LegacyButton
          size="small"
          isBold
          isFilled={false}
          color={LegacyPalette.primaryNormal}
          customStyle={{color: LegacyPalette.primaryNormal, fontWeight: 600}}
          width="100%"
          handleClick={closeModal}
        >
          이 덱으로 시작!
        </LegacyButton>
        <LegacyButton
          size="small"
          isBold
          isFilled={false}
          color={LegacySementic.red.normal}
          customStyle={{color: LegacySementic.red.normal, fontWeight: 600}}
          width="100%"
          handleClick={closeModal}
        >
          뒤로
        </LegacyButton>
        </S.DeckChooseButtonContainer>
      </S.TrialDeckChooseContainer>
    </LegacyModal>
  );
};

export default TrialDeckChooseModal;
