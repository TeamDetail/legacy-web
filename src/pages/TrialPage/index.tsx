import Sidebar from '@components/common/Sidebar';
import * as S from './style';
import { useState } from 'react';
import TrialEntrance from '@components/trial/TrialEntrance';
import TrialIngame from '@components/trial/TrialIngame';
import { useTrial } from '@src/hooks/trial/useTrial';

export type ChallengePageType = "ENTER_PAGE" | "INGAME_PAGE"

const TrialPage = () => {
  const [page, setPage] = useState<ChallengePageType>("ENTER_PAGE");
  const [isLoadingPageChange, setIsLoadingPageChange] = useState(false);
	const { trialData } = useTrial();

  return page === "ENTER_PAGE" ? (
    <S.TrialContainer>
      <Sidebar isLoading={isLoadingPageChange} />
      <TrialEntrance
        isLoadingPageChange={isLoadingPageChange}
        setLoading={setIsLoadingPageChange}
        setPage={setPage}
      />
      <S.TiralSidebar $isLoading={isLoadingPageChange.toString()} />
    </S.TrialContainer>
  ) : (
    <TrialIngame
      trialData={trialData}
      isLoading={isLoadingPageChange}
      changePage={() => {
        setIsLoadingPageChange(true);
        setTimeout(() => {
          setPage("ENTER_PAGE");
        }, 1500);
        setTimeout(() => {
          setIsLoadingPageChange(false);
        }, 1650);
      }}
    />
  );
}

export default TrialPage