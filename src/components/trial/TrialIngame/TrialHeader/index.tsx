import { TrialState } from '@src/types/trial/trial.type';
import * as S from './style';
import TrialInventory from './TrialInventory';
import TrialScoreCalc from './TrialScoreCalc';

interface TrialHeaderProps {
  isLoading: boolean;
  trialData: TrialState;
}

const TrialHeader = ({
  isLoading,
  trialData
}: TrialHeaderProps) => {
  
  return (
    <S.TrialHeaderContainer $isLoading={isLoading.toString()}>
      <S.TrialScoreAndItemContainer>
        <TrialInventory tokens={trialData.token}/>
        <TrialScoreCalc />
      </S.TrialScoreAndItemContainer>
    </S.TrialHeaderContainer>
  )
}

export default TrialHeader