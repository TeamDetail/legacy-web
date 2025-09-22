import InventoryImg from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { Suspense, useEffect, useState } from "react";
import UserRecordSkeleton from "@components/skeleton/UserRecordSkeleton";
import { HeaderContainer } from "@src/styles/globalStyles";
import { Outlet, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const nav = useNavigate();
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "개요", isAtv: true, value: "overview" },
    { text: "도감", isAtv: false, value: "codex" },
    { text: "인벤토리", isAtv: false, value: "inventory" },
    // { text: "덱", isAtv: false },
    // { text: "시련 스탯", isAtv: false },
    // { text: "칭호", isAtv: false },
  ]);

  useEffect(() => {
    nav("/profile/" + menuBadgeData.find(item => item.isAtv)?.value)
  }, [menuBadgeData])

  return (
    <S.ProfileContainer>
      <Sidebar />
      <S.MainContainer
        $isOverViewPage={(
          menuBadgeData.find((item) => item.isAtv)?.value === "overview"
        ).toString()}
      >
        <HeaderContainer>
          <InventoryImg width={32} height={32} />
          프로필
        </HeaderContainer>
        {menuBadgeData.find((item) => item.isAtv)?.value === "overview" || (
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
          <Outlet/>
        </S.DataContainer>
      </S.MainContainer>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
