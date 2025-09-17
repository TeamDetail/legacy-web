import InventoryImg from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { Suspense, useState } from "react";
import Codex from "@components/profile/Codex";
import UserRecordSkeleton from "@components/skeleton/UserRecordSkeleton";
import Inventory from "@components/profile/Inventory";
import { HeaderContainer } from "@src/styles/globalStyles";
import OverView from "@components/profile/OverView";

const ProfilePage = () => {
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "개요", isAtv: true, value: "OVERVIEW" },
    { text: "도감", isAtv: false, value: "CODEX" },
    { text: "인벤토리", isAtv: false, value: "INVENTORY" },
    // { text: "덱", isAtv: false },
    // { text: "시련 스탯", isAtv: false },
    // { text: "칭호", isAtv: false },
  ]);

  return (
    <S.ProfileContainer>
      <Sidebar />
      <S.MainContainer
        $isOverViewPage={(
          menuBadgeData.find((item) => item.isAtv)?.value === "OVERVIEW"
        ).toString()}
      >
        <HeaderContainer>
          <InventoryImg width={32} height={32} />
          프로필
        </HeaderContainer>
        {menuBadgeData.find((item) => item.isAtv)?.value === "OVERVIEW" || (
          <Suspense fallback={<UserRecordSkeleton />}>
            <UserRecord />
          </Suspense>
        )}
        <S.DataContainer>
          <MenuBadge
            badgeColor={LegacyPalette.primaryNormal}
            menuData={menuBadgeData}
            setMenuData={setMenuBadgeData}
          />
          {menuBadgeData.find((item) => item.isAtv)?.value === "CODEX" && (
            <Codex />
          )}
          {menuBadgeData.find((item) => item.isAtv)?.value === "OVERVIEW" && (
            <OverView />
          )}
          {menuBadgeData.find((item) => item.isAtv)?.text === "인벤토리" && (
            <Inventory />
          )}
        </S.DataContainer>
      </S.MainContainer>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
