import Inventory from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { Suspense, useState } from "react";
import Codex from "@components/profile/Codex";
import UserRecordSkeleton from "@components/skeleton/UserRecordSkeleton";

const ProfilePage = () => {
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "도감", isAtv: true, value: "" },
    // { text: "덱", isAtv: false },
    // { text: "시련 스탯", isAtv: false },
    // { text: "칭호", isAtv: false },
  ]);

  return (
    <S.ProfileContainer>
      <Sidebar />
      <S.MainContainer>
        <S.ProfileHeader>
          <Inventory width={32} height={32} />
          프로필
        </S.ProfileHeader>
        <Suspense fallback={<UserRecordSkeleton/>}>
          <UserRecord />
        </Suspense>
        <S.DataContainer>
          <MenuBadge badgeColor={LegacyPalette.primaryNormal} menuData={menuBadgeData} setMenuData={setMenuBadgeData} />
          {menuBadgeData.find(item => item.isAtv)?.text === "도감" && (
            <Codex/>
          )}
        </S.DataContainer>
      </S.MainContainer>
    </S.ProfileContainer>
  );
};

export default ProfilePage; 