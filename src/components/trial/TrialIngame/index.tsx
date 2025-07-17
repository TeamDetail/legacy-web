import { TrialState } from '@src/types/trial/trial.type';
import TrialStatusBar from './TrialStatusBar';
import styled from 'styled-components';
import TrialHeader from './TrialHeader';

export interface TrialIngameProps {
  isLoading: boolean;
  changePage: () => void;
  trialData: TrialState;
}

const TrialIngame = ({
  isLoading = false,
  changePage,
  trialData
}: TrialIngameProps) => {
  return (
    <TrialContainer>
      <TrialStatusBar
        isLoading={isLoading}
        changePage={changePage}
        trialData={trialData}
      />
      <TrialMainContainer>
        <TrialHeader
          isLoading={isLoading}
          trialData={trialData}
        />
      </TrialMainContainer>
    </TrialContainer>
  )
}

const TrialContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 12px;
  padding: 28px;
  background: linear-gradient(180deg, #111212 63.28%, #29002E 100%);
`

const TrialMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default TrialIngame