import Inventory from "@src/assets/pageIcon/inventory.svg?react";
import * as S from "./style";
import UserRecord from "@components/profile/UserRecord";
import { LegacyPalette } from "@src/constants/color/color";
import { MenuBadge } from "@src/components/common/MenuBadge";
import Sidebar from "@src/components/common/Sidebar";
// import { useParams } from "react-router-dom";
// import RecordItem from "@src/components/profile/UserRecord/RecordItem";
// import ProgressBar from "@src/components/profile/ProgressBar";
// import { LegacyPalette } from "@src/constants/color/color";

const menuBadgeData = [
  { text: "도감", isAtv: true },
  // { text: "덱", isAtv: false },
];

const ProfilePage = () => {
  // const { username } = useParams<{ username: string }>();
  return (
    <S.Container>
      <S.SidebarArea><Sidebar /></S.SidebarArea>
      <S.ProfileHeader>
        <Inventory width={32} height={32} />
        프로필
      </S.ProfileHeader>
      <UserRecord />
      <S.DataContainer>
        <MenuBadge badgeColor={LegacyPalette.primaryNormal} data={menuBadgeData} />
        
      </S.DataContainer>
    </S.Container>
  );
};

export default ProfilePage; 