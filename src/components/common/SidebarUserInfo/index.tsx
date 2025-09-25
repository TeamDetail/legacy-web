import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LegacyButton from "../LegacyButton";
import useUserStore from "@src/store/useUserStore";
import { useGetMeQuery } from "@src/queries/user/user.queries";
import { useEffect } from "react";

const SidebarUserInfo = () => {
  const { data: myUserData } = useGetMeQuery({ suspense: true });
  const { setUserData, userStoreData } = useUserStore();

  useEffect(() => {
    if (myUserData) {
      setUserData(myUserData.data)
    }
  }, [myUserData])

  const nickname = userStoreData?.nickname || "Unknown User";
  const level = userStoreData?.level || 0;
  const titleName =
    userStoreData?.title.name.length > 0
      ? userStoreData?.title.name
      : "칭호 미착용";

  return (
    <SidebarUserInfoWrapper>
      <SidebarUserInfoContainer to={"/profile/overview"}>
        <SidebarUserImg $img={userStoreData.imageUrl}/>
        <section>
          <SidebarUserName>{nickname}</SidebarUserName>
          <p>Lv. {level}</p>
          <p>{titleName}</p>
        </section>
      </SidebarUserInfoContainer>
      <LegacyButton
        size="default"
        isFilled={false}
        isBold={false}
        color={LegacyPalette.lineNeutral}
        children={
          <CreditText>
            <span>크레딧</span>
            {myUserData?.data.credit}
          </CreditText>
        }
        width="100%"
      />
    </SidebarUserInfoWrapper>
  );
};

const SidebarUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const CreditText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Caption2.Bold};
  color: ${LegacySementic.yellow.normal};

  span {
    ${LegacyTypography.Pretendard.Caption2.Medium};
    color: ${LegacyPalette.labelNormal};
  }
`;

const SidebarUserInfoContainer = styled(Link)`
  display: flex;
  width: 100%;
  gap: 12px;
  text-decoration: none;

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

const SidebarUserImg = styled.div<{
  $img: string;
}>`
  background: ${({ $img }) => `url("${$img}")`};
  border-radius: 8px;
  width: 56px;
  height: 56px;
  background-size: cover;
  background-position: center;
`;

const SidebarUserName = styled.div`
  white-space: nowrap;

  ${LegacyTypography.Pretendard.Headline.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export default SidebarUserInfo;
