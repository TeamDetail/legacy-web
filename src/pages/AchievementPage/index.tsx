import { useState } from "react";
import * as S from "./style";
import Sidebar from "@components/common/Sidebar";
import Achievement from "@src/assets/pageIcon/achievement.svg?react";
import { MenuBadge } from "@components/common/MenuBadge";
import { LegacyPalette } from "@src/constants/color/color";
import ProgressBar from "@components/common/ProgressBar";
import AchievementRecord from "@components/achievement/AchievementRecord";
import AwardButton from "@components/achievement/AwardButton";
// import { useSuspenseQuery } from "@tanstack/react-query";
// import { QUERY_KEYS } from "@src/queries/queryKey";
// import achievementApi from "@src/api/achievement/achievement.api";

const AchievementPage = () => {
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "전체", isAtv: true },
    { text: "일일", isAtv: false },
    { text: "탐험", isAtv: false },
    { text: "숙련", isAtv: false },
    { text: "시련", isAtv: false },
    { text: "히든", isAtv: false },
  ]);

  // const { data: daliyAchievementData } = useSuspenseQuery({
  //   queryKey: [QUERY_KEYS.achievement.getAchieveByType, "daliy"],
  //   queryFn: () => achievementApi.getAchievementByType("daliy"),
  //   staleTime: 1000 * 60 * 5,
  // });

  return (
    <S.AchievementWrapper>
      <Sidebar />
      <S.MainContainer>
        <S.AchievementHeader>
          <Achievement width={32} height={32} />
          도전과제
        </S.AchievementHeader>
        <AwardButton position="top"/>
        <S.DataContainer>
          <MenuBadge
            badgeColor={LegacyPalette.primaryNormal}
            menuData={menuBadgeData}
            setMenuData={setMenuBadgeData}
          />
        </S.DataContainer>
        <S.AchievementSidebar>
          <AwardButton position="side"/>
          <S.AchievementPercents>
            <header>
              총 달성율
              <p>20.8%</p>
            </header>
            <ProgressBar
              value={104}
              max={500}
              barColor={LegacyPalette.primaryNormal}
              bgColor={LegacyPalette.fillNormal}
              label={`${204} / ${500}`}
            />
          </S.AchievementPercents>
          <AchievementRecord/>
        </S.AchievementSidebar>
      </S.MainContainer>
    </S.AchievementWrapper>
  );
};

export default AchievementPage;
