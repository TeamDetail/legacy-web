import Sidebar from '@components/common/Sidebar';
import Ranking from "@src/assets/sidebarIcon/ranking.svg?react";
import * as S from './style';
import RankingList from '@components/ranking/RankingList';
import { Suspense, useState } from 'react';
import RankingListSkeleton from "@components/skeleton/RankingListSkeleton";

interface FilterValue<T, T2> {
  text: string;
  value: T | T2;
  isSelected: boolean;
}
const Filter: Record<"type" | "scope", FilterValue<"explore" | "trial" | "level", "all" | "friend">[]> = {
  type: [
    {
      text: "탐험",
      value: "explore",
      isSelected: true
    },
    {
      text: "시련",
      value: "trial",
      isSelected: false,
    },
    {
      text: "숙련",
      value: "level",
      isSelected: false,
    },
  ],
  scope: [
    {
      text: "전체",
      value: "all",
      isSelected: true
    },
    {
      text: "친구",
      value: "friend",
      isSelected: false
    },
  ]
}

const RankingPage = () => {
  const [rankFilter] = useState(Filter);
  return (
    <S.RankingPageContainer>
      <Sidebar/>
      <S.RankingPageMainContainer>
        <header><Ranking width={32} height={32}/>랭킹</header>
        <S.RankingPageMain>
          <Suspense fallback={<RankingListSkeleton/>}>
            <RankingList
              type={rankFilter.type.find(item => item.isSelected)!.value as ("explore" | "trial" | "level")}
              scope={rankFilter.scope.find(item => item.isSelected)!.value as ("all" | "friend")}  
            />
          </Suspense>
        </S.RankingPageMain>
      </S.RankingPageMainContainer>
    </S.RankingPageContainer>
  )
}

export default RankingPage