import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useUser from "@src/hooks/user/useUser";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarUserInfo = () => {
  const { myUserData } = useUser(true);

  const nickname = myUserData?.data.nickname || "Unknown User";
  const level = myUserData?.data.level || 0;
  const titleName =
    myUserData!.data.title.name.length > 0
      ? myUserData!.data.title.name
      : "칭호 미착용";

  return (
    <SidebarUserInfoContainer to={"/profile"}>
      <img src={myUserData?.data.imageUrl} alt="profileImg" />
      <section>
        <SidebarUserName>{nickname}</SidebarUserName>
        <p>{level}Lv</p>
        <p>{titleName}</p>
      </section>
    </SidebarUserInfoContainer>
  );
};

const SidebarUserInfoContainer = styled(Link)`
  display: flex;
  width: 100%;
  gap: 12px;
  text-decoration: none;
  & img {
    border-radius: 8px;
    width: 56px;
    height: 56px;
    object-fit: cover;
  }

  & section {
    display: flex;
    flex-direction: column;

    & p {
      ${LegacyTypography.Pretendard.Caption1.Bold}
      color: ${LegacyPalette.labelAlternative};
    }

    @media (max-width: 840px) {
      display: none;
    }
  }
`;

const SidebarUserName = styled.div`
  white-space: nowrap;

  ${LegacyTypography.Pretendard.Headline.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export default SidebarUserInfo;
