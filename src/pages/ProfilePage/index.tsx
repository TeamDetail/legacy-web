import InventoryImg from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { Suspense, useState } from "react";
import UserRecordSkeleton from "@components/skeleton/UserRecordSkeleton";
import { HeaderContainer } from "@src/styles/globalStyles";
import { Outlet, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const loc = useLocation();
  const [menuBadgeData, setMenuBadgeData] = useState([
    {
      text: "개요",
      isAtv:
        loc.pathname.split("/")[2] === "overview" ||
        loc.pathname.split("/")[2] === undefined,
      value: "overview",
    },
    {
      text: "도감",
      isAtv: loc.pathname.split("/")[2] === "codex",
      value: "codex",
    },
    {
      text: "칭호",
      isAtv: loc.pathname.split("/")[2] === "titles",
      value: "titles",
    },
    {
      text: "인벤토리",
      isAtv: loc.pathname.split("/")[2] === "inventory",
      value: "inventory",
    },
    {
      text: "프로필 수정",
      isAtv: loc.pathname.split("/")[2] === "fix",
      value: "fix",
    },
  ]);

  return (
    <S.ProfileContainer>
      <Sidebar />
      <S.MainContainer
        $isOverViewPage={(
          menuBadgeData.find((item) => item.isAtv)?.value === "overview" ||
          menuBadgeData.find((item) => item.isAtv)?.value === "fix"
        ).toString()}
      >
        <HeaderContainer>
          <InventoryImg width={32} height={32} />
          프로필
        </HeaderContainer>
        {menuBadgeData.find((item) => item.isAtv)?.value === "overview" ||
          menuBadgeData.find((item) => item.isAtv)?.value === "fix" || (
            <Suspense fallback={<UserRecordSkeleton />}>
              <UserRecord />
            </Suspense>
          )}
        <S.DataContainer>
          <MenuBadge
            badgeColor={LegacyPalette.primaryNormal}
            menuData={menuBadgeData}
            setMenuData={setMenuBadgeData}
            isLink
          />
          <Outlet />
        </S.DataContainer>
      </S.MainContainer>
    </S.ProfileContainer>
  );
};

export default ProfilePage;
