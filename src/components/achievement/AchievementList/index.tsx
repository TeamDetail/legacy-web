import SearchBar from '@components/common/SearchBar';
import * as S from './style';
import { Suspense, useState } from 'react';
import { MenuBadge, MenuDataType } from '@components/common/MenuBadge';
import { LegacyPalette } from '@src/constants/color/color';
import AchievementItemContainer from '@components/achievement/AchievementList/AchievementItemContainer';
import { AchievementValueType } from '@src/types/achievement/achievement.type';
import AchievementSkeleton from '@components/skeleton/AchievementSkeleton';

const AchievementList = () => {
  const [searchData, setSearchData] = useState("");
  const [menu, setMenu] = useState<MenuDataType[]>([
    // { text: "전체", value: "all", isAtv: true },
    { text: "탐험", value: "EXPLORE", isAtv: true },
    { text: "숙련", value: "LEVEL", isAtv: false },
    { text: "히든", value: "HIDDEN", isAtv: false },
  ]);
  return (
    <S.AchievementListContainer>
      <SearchBar placeholder='도전과제 이름으로 검색..' value={searchData} handleValue={(s) => setSearchData(s)}/>
      <MenuBadge menuData={menu} setMenuData={setMenu} badgeColor={LegacyPalette.primaryNormal}/>
      <Suspense fallback={<AchievementSkeleton/>}>
        <AchievementItemContainer type={menu.find(item => item.isAtv)?.value as AchievementValueType}/>
      </Suspense>
    </S.AchievementListContainer>
  )
}

export default AchievementList