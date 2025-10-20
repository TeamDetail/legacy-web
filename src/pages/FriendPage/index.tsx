import Sidebar from "@components/common/Sidebar";
import * as S from "./style";
import { HeaderContainer, MainContainer } from "@src/styles/globalStyles";
import Friend from "@src/assets/sidebarIcon/friend.svg?react";
import { MenuBadge, MenuDataType } from "@components/common/MenuBadge";
import { LegacyPalette } from "@src/constants/color/color";
import { useState } from "react";
import MyFriendList from "@components/friend/MyFriendList";
import PendingFriendList from "@components/friend/FriendRequestList";
import FriendAdd from "@components/friend/FriendAdd";

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
          <MenuBadge
            badgeColor={LegacyPalette.primaryNormal}
            menuData={menuBadgeData}
            setMenuData={setMenuBadgeData}
          />
          {menuBadgeData.find((data) => data.isAtv)?.value === "friend" && (
            <MyFriendList />
          )}
          {menuBadgeData.find((data) => data.isAtv)?.value === "pending" && (
            <PendingFriendList />
          )}
          {menuBadgeData.find((data) => data.isAtv)?.value === "add" && (
            <FriendAdd />
          )}
        </S.FriendDataContainer>
      </MainContainer>
    </S.FriendContainer>
  );
};

export default FriendPage;
