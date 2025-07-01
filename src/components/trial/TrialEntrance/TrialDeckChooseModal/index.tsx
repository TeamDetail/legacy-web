import { LegacyModal } from "@components/common/LegacyModal";
import { CardResponse } from "@src/types/card/card.type";
import * as S from './style';
import LegacyButton from "@components/common/LegacyButton";
import { LegacySementic } from "@src/constants/color/color";

interface TrialDeckChooseModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  choosedDeck: CardResponse[] | null;
  changeChooseDeck: (deck: CardResponse[]) => void;
}

const TrialDeckChooseModal = ({isModalOpen, closeModal}: TrialDeckChooseModalProps) => {
  return (
    <LegacyModal isOpen={isModalOpen} $background>
      <S.TrialDeckChooseContainer>
        <LegacyButton
          size="small"
          isBold
          isFilled={false}
          color={LegacySementic.red.normal}
        >
          뒤로
        </LegacyButton>
      </S.TrialDeckChooseContainer>
    </LegacyModal>
  );
};

export default TrialDeckChooseModal;
