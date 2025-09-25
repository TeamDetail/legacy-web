import Sidebar from "@components/common/Sidebar";
import * as S from "./style";
import { HeaderContainer, MainContainer } from "@src/styles/globalStyles";
import Friend from "@src/assets/sidebarIcon/friend.svg?react";
import { MenuBadge, MenuDataType } from "@components/common/MenuBadge";
import { LegacySementic } from "@src/constants/color/color";
import { useState } from "react";

const FriendPage = () => {
  const [menuBadgeData, setMenuBadgeData] = useState<MenuDataType[]>([
    { text: "목록", isAtv: true, value: "friend" },
    { text: "대기 중", isAtv: false, value: "pending" },
    { text: "추가", isAtv: false, value: "add" },
  ]);

  return (
    <S.FriendContainer>
      <Sidebar />
      <MainContainer>
        <HeaderContainer>
          <Friend width={32} height={32} />
          친구
        </HeaderContainer>
        <S.FriendDataContainer>
          <MenuBadge badgeColor={LegacySementic.purple.normal} menuData={menuBadgeData} setMenuData={setMenuBadgeData} />
        </S.FriendDataContainer>
      </MainContainer>
    </S.FriendContainer>
  );
};

export default FriendPage;
