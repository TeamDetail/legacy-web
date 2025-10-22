import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LegacyButton from "../LegacyButton";
import useUserStore from "@src/store/useUserStore";
import { useGetMeQuery } from "@src/queries/user/user.queries";
import { useEffect } from "react";
import Coin from '@src/assets/sidebarIcon/legacyCoin.png';
import useModalStore from "@src/store/useModalStore";
import NameUpdateModal from "@components/auth/NameUpdateModal";
import { formatNumberWithCommas } from "@src/utils/format/formatNumberWithCommas";
import Title from "@components/common/Title";

const SidebarUserInfo = () => {
  const { data: myUserData } = useGetMeQuery();
  const { setUserData, userStoreData } = useUserStore();
  const { setOpenModal } = useModalStore();

  useEffect(() => {
    if (userStoreData.imageUrl.length === 0 && myUserData) {
      setUserData(myUserData)
      if (myUserData.nickname.length == 0) {
        setOpenModal({
          element: <NameUpdateModal/>,
          key: "NAME_UPDATE"
        })
      }
    }
  }, [])

  const nickname = userStoreData?.nickname || "NONAME";
  const level = userStoreData?.level || 0;

  return (
    <SidebarUserInfoWrapper>
      <SidebarUserInfoContainer to={"/profile/overview"}>
        <SidebarUserImg $img={userStoreData.imageUrl} />
        <section>
          <SidebarUserName>{nickname}</SidebarUserName>
          <p>Lv. {level}</p>
          {userStoreData.title.name.length !== 0 && (
            <Title
              name={userStoreData.title.name}
              styleId={userStoreData.title.styleId}
            />
          )}
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
            <p>{formatNumberWithCommas(userStoreData.credit)}</p>
            <img src={Coin} width="100%" />
            <div>
              <span>크레딧</span>
              {formatNumberWithCommas(userStoreData.credit)}
            </div>
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

  span {
    ${LegacyTypography.Pretendard.Caption2.Medium};
    color: ${LegacyPalette.labelNormal};
    white-space: nowrap;
  }

  p {
    ${LegacyTypography.Pretendard.Caption2.Bold};
    color: ${LegacySementic.yellow.normal};
  }

  @media (max-width: 840px) {
    > span,
    > p,
    > div {
      display: none;
    }

    &:hover {
      div {
        display: flex;
        position: absolute;
        align-items: center;
        gap: 4px;
        ${LegacyTypography.Pretendard.Label.Bold};
        background-color: ${LegacyPalette.backgroundNormal};
        color: ${LegacySementic.yellow.netural};
        border-radius: 8px;
        padding: 8px 12px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
      }
    }
  }

  @media (min-width: 840px) {
    img,
    div {
      display: none;
    }
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
    justify-content: center;
    flex-grow: 1;
    min-width: 0;

    & p {
      ${LegacyTypography.Pretendard.Caption1.Bold}
      color: ${LegacyPalette.labelAlternative};
      margin-bottom: 2px;
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
  min-width: 60px;
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
`;

const SidebarUserName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${LegacyTypography.Pretendard.Body1.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export default SidebarUserInfo;
