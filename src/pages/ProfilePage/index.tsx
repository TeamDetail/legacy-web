import Inventory from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
import { useState } from "react";
import Codex from "@components/profile/Codex";
// import { useParams } from "react-router-dom";
// import RecordItem from "@src/components/profile/UserRecord/RecordItem";
// import ProgressBar from "@src/components/profile/ProgressBar";
// import { LegacyPalette } from "@src/constants/color/color";

const ProfilePage = () => {
  // const { username } = useParams<{ username: string }>();
  const [menuBadgeData, setMenuBadgeData] = useState([
    { text: "도감", isAtv: true },
    // { text: "덱", isAtv: false },
  ]);

  return (
    <S.Container>
      <S.SidebarArea>
        {/* <Sidebar /> */}
      </S.SidebarArea>
      <S.ProfileHeader>
        <Inventory width={32} height={32} />
        프로필
      </S.ProfileHeader>
      <UserRecord />
      <S.DataContainer>
        <MenuBadge badgeColor={LegacyPalette.primaryNormal} menuData={menuBadgeData} setMenuData={setMenuBadgeData} />
        {menuBadgeData.find(item => item.isAtv)?.text === "도감" && (
          <Codex/>
        )}
      </S.DataContainer>
    </S.Container>
  );
};

export default ProfilePage; 