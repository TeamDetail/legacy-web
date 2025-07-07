import { useParams } from "react-router-dom";
import Sidebar from "@src/components/common/Sidebar";
import { MenuBadge } from "@src/components/common/MenuBadge";
import * as S from "./style";
import { LegacyPalette } from "@src/constants/color/color";

const menuBadgeData = [
  { text: "도감", isAtv: true },
  { text: "덱", isAtv: false },
];

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <S.Container>
      <S.SidebarArea>
        <Sidebar />
      </S.SidebarArea>
      <S.ProfileHeader>
        프로필
      </S.ProfileHeader>
      <S.UserInfo>
        <S.UserName>유저 이름: {username}</S.UserName>
        <MenuBadge badgeColor={LegacyPalette.primaryNormal} data={menuBadgeData} />
        {/* 추가 유저 정보 영역 */}
      </S.UserInfo>
      <S.DataContainer>
        {/* 지도, 통계 등 데이터 영역 */}
        <div>지도/데이터 영역</div>
      </S.DataContainer>
      <S.RecordContainer>
        {/* 기록 영역 */}
        <div>기록 영역</div>
      </S.RecordContainer>
    </S.Container>
  );
};

export default ProfilePage; 