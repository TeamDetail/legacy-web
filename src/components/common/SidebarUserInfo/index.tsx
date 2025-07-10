import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useGetMeQuery } from "@src/queries/user/user.queries";
import { User } from "@src/types/user/user.type";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SidebarUserInfo = () => {
  const { data } = useGetMeQuery({ suspense: true });
  const [myUserData, setMyUserData] = useState<User>();

  useEffect(() => {
    if (data) {
      setMyUserData(data.data);
    }
  }, [myUserData])

  const nickname = myUserData?.nickname || "Unknown User";
  const level = myUserData?.level || 0;
  const titleName = myUserData?.title?.name || "No Title";

  return (
    <SidebarUserInfoContainer>
      <img src={myUserData?.imageUrl} alt="profileImg" />
      <section>
        <SidebarUserName>{nickname}</SidebarUserName>
        <p>{level}Lv</p>
        {/* 이후에 title 삽입 */}
        <p>{titleName}</p>
      </section>
    </SidebarUserInfoContainer>
  );
};

const SidebarUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;

  & img {
    border-radius: 999px;
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
  }
`;

const SidebarUserName = styled.div`
  white-space: nowrap;

  ${LegacyTypography.Pretendard.Headline.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export default SidebarUserInfo;
