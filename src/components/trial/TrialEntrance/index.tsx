import * as S from './style';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import LegacyButton from '@components/common/LegacyButton';
import { ChallengePageType } from '@src/pages/TrialPage';
import { useTrial } from '@src/hooks/trial/useTrial';
import { useState } from 'react';
import { CardResponse } from '@src/types/card/card.type';
import TrialDeckChooseModal from '@components/trial/TrialEntrance/TrialDeckChooseModal';

interface TrialEntranceProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<ChallengePageType>>;
  isLoadingPageChange: boolean;
}

const TrialEntrance = ({
  setLoading,
  setPage,
  isLoadingPageChange,
}: TrialEntranceProps) => {
  const {runNewTrial, defalutTrialData, trialData} = useTrial();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosedDeck, setChoosedDeck] = useState<CardResponse[] | null>(null);

  const changePage = () => {
    setLoading(true);
    if (JSON.stringify(trialData) === JSON.stringify(defalutTrialData) && choosedDeck) {
      runNewTrial(choosedDeck, () => {
        setTimeout(() => {
          setPage("INGAME_PAGE");
        }, 1500);
        setTimeout(() => {
          setLoading(false);
        }, 1650);
      })
    }
  };

  return (
    <S.TrialEntanceContainer
      $isLoading={isLoadingPageChange.toString()}
    >
      <S.TrialFloorContainer>
        {Array.from({length: 12}).map((_, index) => (
          <S.TrialFloorItem
            key={index}
            $color={
              (index+trialData.score.floor-7 === trialData.score.floor)
              ? LegacyPalette.primaryNormal
              : (index+trialData.score.floor-7) % 10 === 0
                ? LegacySementic.red.normal
                : ((index+trialData.score.floor-7) % 3 === 0)
                  ? LegacySementic.green.normal
                  : LegacyPalette.labelNormal
            }
            $currentFloor={trialData.score.floor}
            $itemFloor={(index+trialData.score.floor-7)}
          >
            <p>{index+trialData.score.floor-7 <= 0 || index+trialData.score.floor-7}</p>
          </S.TrialFloorItem>
        ))}
        <S.TrialShadow/>
      </S.TrialFloorContainer>
      <S.TrialController>
        {trialData.score.floor > 1 ? (
          <S.TrialCurrentFloor>
            현재<span>{trialData.score.floor}</span>층 도전 중!
          </S.TrialCurrentFloor>
        ) : (
          <S.TrialCurrentFloor>
            <span>시련</span>에 도전하시겠습니까?
          </S.TrialCurrentFloor>
        )}
        <LegacyButton
          size='big'
          isBold
          isFilled
          color={LegacyPalette.primaryNormal}
          width='100%'
          handleClick={() => setIsModalOpen(true)}
        >
          <S.TrialButtonText
            $color={LegacyPalette.labelNormal}
          >
            도전하기!
          </S.TrialButtonText>
        </LegacyButton>
        <TrialDeckChooseModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          choosedDeck={choosedDeck}
          changeChooseDeck={(deck) => setChoosedDeck(deck)}
        />
        {trialData.score.floor > 1 && (
          <>
            <LegacyButton
              size='big'
              isBold
              isFilled={false}
              color={LegacySementic.yellow.netural}
              width='100%'
            >
              <S.TrialButtonText
                $color={LegacySementic.yellow.netural}
              >
                런 정보
              </S.TrialButtonText>
            </LegacyButton>
            <LegacyButton
              size='big'
              isBold
              isFilled={false}
              color={LegacySementic.red.normal}
              width='100%'
            >
              <S.TrialButtonText
                $color={LegacySementic.red.normal}
              >
                시련 포기하기
              </S.TrialButtonText>
            </LegacyButton>
          </>
        )}
      </S.TrialController>
    </S.TrialEntanceContainer>
  )
}

export default TrialEntrance