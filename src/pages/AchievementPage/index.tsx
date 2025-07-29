import { useState } from "react";
import * as S from "./style";
import Sidebar from "@components/common/Sidebar";
import Achievement from "@src/assets/pageIcon/achievement.svg?react";
import { MenuBadge } from "@components/common/MenuBadge";
import { LegacyPalette } from "@src/constants/color/color";

const AchievementPage = () => {
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "전체", isAtv: true },
    { text: "일일", isAtv: false },
    { text: "탐험", isAtv: false },
    { text: "숙련", isAtv: false },
    { text: "시련", isAtv: false },
    { text: "히든", isAtv: false },
  ]);

  return (
    <S.AchievementWrapper>
      <Sidebar />
      <S.MainContainer>
        <S.AchievementHeader>
          <Achievement width={32} height={32} />
          도전과제
        </S.AchievementHeader>
        <S.DataContainer>
          <MenuBadge
            badgeColor={LegacyPalette.primaryNormal}
            menuData={menuBadgeData}
            setMenuData={setMenuBadgeData}
          />
          
        </S.DataContainer>
      </S.MainContainer>
    </S.AchievementWrapper>
  );
};

export default AchievementPage;
