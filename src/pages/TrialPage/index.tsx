import Sidebar from '@components/common/Sidebar';
import * as S from './style';
import { useState } from 'react';
import TrialEntrance from '@components/trial/TrialEntrance';

type ChallengePageType = "ENTER_PAGE" | "INGAME_PAGE"

const TrialPage = () => {
  const [page, setPage] = useState<ChallengePageType>("ENTER_PAGE");
  return (
    <S.TrialContainer>
      <Sidebar/>
      <TrialEntrance/>
      <S.TiralSidebar/>
    </S.TrialContainer>
  )
}

export default TrialPage