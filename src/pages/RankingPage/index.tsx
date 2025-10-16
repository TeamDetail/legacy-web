import Sidebar from '@components/common/Sidebar';
import Ranking from "@src/assets/sidebarIcon/ranking.svg?react";
import * as S from './style';
import RankingList from '@components/ranking/RankingList';
import { Suspense, useEffect, useState } from 'react';
import RankingListSkeleton from "@components/skeleton/RankingListSkeleton";
import { MenuBadge } from '@components/common/MenuBadge';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import { HeaderContainer } from '@src/styles/globalStyles';
import { useNavigate, useParams } from 'react-router-dom';

const RankingPage = () => {
  const { type, scope } = useParams();
  const navigate = useNavigate();
  const [rankTypeFilter, setRankTypeFilter] = useState([
    {
      text: "탐험",
      value: "explore",
      isAtv: type === "explore",
    },
    {
      text: "숙련",
      value: "level",
      isAtv: type === "level",
    },
  ]);
  const [rankScopeFilter, setRankingScopeFilter] = useState([
    {
      text: "전체",
      value: "all",
      isAtv: scope === "all",
    },
    {
      text: "친구",
      value: "friend",
      isAtv: scope === "friend",
    },
  ]);

  useEffect(() => {
    setRankTypeFilter((prev) =>
      prev.map((item) => ({
        ...item,
        isAtv: item.value === type,
      }))
    );

    setRankingScopeFilter((prev) =>
      prev.map((item) => ({
        ...item,
        isAtv: item.value === scope,
      }))
    );
  }, [type, scope]);

  return (
    <S.RankingPageContainer>
      <Sidebar />
      <S.RankingPageMainContainer>
        <HeaderContainer>
          <Ranking width={32} height={32} />
          랭킹
        </HeaderContainer>
        <S.RankingPageMain>
          <S.RankingPageFilter>
            <div>
              <MenuBadge
                badgeColor={LegacyPalette.primaryNormal}
                menuData={rankTypeFilter}
                setMenuData={setRankTypeFilter}
                onClick={(menu) => {
                  navigate(`/ranking/${menu}/${rankScopeFilter.find((item) => item.isAtv)?.value}`);
                }}
              />
            </div>
            <div>
              <MenuBadge
                badgeColor={LegacySementic.red.netural}
                menuData={rankScopeFilter}
                setMenuData={setRankingScopeFilter}
                onClick={(menu) => {
                  navigate(`/ranking/${rankTypeFilter.find((item) => item.isAtv)?.value}/${menu}`);
                }}
              />
            </div>
          </S.RankingPageFilter>
          <Suspense fallback={<RankingListSkeleton />}>
            <RankingList
              type={type as "explore" | "level" | "trial"}
              scope={scope as "all" | "friend"}
            />
          </Suspense>
        </S.RankingPageMain>
      </S.RankingPageMainContainer>
    </S.RankingPageContainer>
  );
}

export default RankingPage