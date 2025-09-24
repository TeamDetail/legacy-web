import Sidebar from "@components/common/Sidebar";
import * as S from "./style";
import { HeaderContainer, MainContainer } from "@src/styles/globalStyles";
import Friend from "@src/assets/sidebarIcon/friend.svg?react";
import { MenuBadge, MenuDataType } from "@components/common/MenuBadge";
import { LegacySementic } from "@src/constants/color/color";
import { useState } from "react";

const index = () => {
  const [menuBadgeData, setMenuBadgeData] = useState<MenuDataType[]>([{}])

  return (
    <S.FriendContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <Friend width={32} height={32} />
          친구
        </HeaderContainer>
        <S.FriendDataContainer>
          <MenuBadge badgeColor={LegacySementic.purple.normal}/>
        </S.FriendDataContainer>
      </MainContainer>
    </S.FriendContainer>
  );
};

export default index;
