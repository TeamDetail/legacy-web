import InventoryImg from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { Suspense, useEffect, useState } from "react";
import UserRecordSkeleton from "@components/skeleton/UserRecordSkeleton";
import { HeaderContainer } from "@src/styles/globalStyles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const [menuBadgeData, setMenuBadgeData] = useState([
    {
      text: "개요",
      isAtv: loc.pathname.split("/")[2] === "overview",
      value: "overview",
    },
    {
      text: "도감",
      isAtv: loc.pathname.split("/")[2] === "codex",
      value: "codex",
    },
    {
      text: "인벤토리",
      isAtv: loc.pathname.split("/")[2] === "inventory",
      value: "inventory"
    },
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
