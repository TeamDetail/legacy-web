import Sidebar from '@components/common/Sidebar';
import Ranking from "@src/assets/sidebarIcon/ranking.svg?react";
import * as S from './style';
import RankingList from '@components/ranking/RankingList';
import { Suspense, useState } from 'react';
import RankingListSkeleton from "@components/skeleton/RankingListSkeleton";
import { MenuBadge } from '@components/common/MenuBadge';
import { LegacyPalette } from '@src/constants/color/color';

const RankingPage = () => {
  const [rankTypeFilter, setRankTypeFilter] = useState([
    {
      text: "탐험",
      value: "explore",
      isAtv: true
    },
    // {
    //   text: "시련",
    //   value: "trial",
    //   isAtv: false,
    // },
    {
      text: "숙련",
      value: "level",
      isAtv: false,
    },
  ]);
  const [rankScopeFilter ] = useState([
    {
      text: "전체",
      value: "all",
      isAtv: true,
    },
    {
      text: "친구",
      value: "friend",
      isAtv: false,
    },
  ]);

  return (
    <S.RankingPageContainer>
      <Sidebar />
      <S.RankingPageMainContainer>
        <header>
          <Ranking width={32} height={32} />
          랭킹
        </header>
        <S.RankingPageMain>
          <S.RankingPageFilter>
            <div>
              <MenuBadge
                badgeColor={LegacyPalette.primaryNormal}
                menuData={rankTypeFilter}
                setMenuData={setRankTypeFilter}
              />
            </div>
            {/* <div>
              <MenuBadge
                badgeColor={LegacySementic.red.netural}
                menuData={rankScopeFilter}
                setMenuData={setRankScopeFilter}
              />
            </div> */}
          </S.RankingPageFilter>
          <Suspense fallback={<RankingListSkeleton />}>
            <RankingList
              type={
                rankTypeFilter.find((item) => item.isAtv)!.value as
                  | "explore"
                  | "trial"
                  | "level"
              }
              scope={
                rankScopeFilter.find((item) => item.isAtv)!.value as
                  | "all"
                  | "friend"
              }
            />
          </Suspense>
        </S.RankingPageMain>
      </S.RankingPageMainContainer>
    </S.RankingPageContainer>
  );
}

export default RankingPage