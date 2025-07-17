import { LegacyModal } from "@components/common/LegacyModal";
import { CardResponse } from "@src/types/card/card.type";

interface TrialDeckChooseModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  choosedDeck: CardResponse[] | null;
  changeChooseDeck: (deck: CardResponse[]) => void;
}

const TrialDeckChooseModal = ({isModalOpen}: TrialDeckChooseModalProps) => {
  return (
    <LegacyModal isOpen={isModalOpen} $background>
      <div>아아아</div>
    </LegacyModal>
  );
};

export default TrialDeckChooseModal;
