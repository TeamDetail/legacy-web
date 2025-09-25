import * as S from "./style";
import { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_DATA } from "@src/constants/sidebarData/sidebarData";
import LegacyButton from "../LegacyButton";
import SidebarUserInfo from "../SidebarUserInfo";
import SidebarUserInfoSkeleton from "@components/skeleton/SidebarUserInfoSkeleton";
import Menu from "@src/assets/sidebarIcon/menu.svg?react";
import { LegacyPalette } from "@src/constants/color/color";
import Mail from "@src/assets/sidebarIcon/mail.svg?react";
// import Setting from "@src/assets/sidebarIcon/setting.svg?react";
import Logout from "@src/assets/sidebarIcon/logout.svg?react";
// import Info from "@src/assets/sidebarIcon/info.svg?react";
import cookies from "@src/libs/cookie/cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/token.constants";
import { useMemo } from "react";
import useModalStore from "@src/store/useModalStore";
import useUserStore from "@src/store/useUserStore";
import MailBox from "@components/mailBox/mailBox";

interface SidebarProps {
  isLoading?: boolean;
}

const Sidebar = ({ isLoading = false }: SidebarProps) => {
  const nav = useNavigate();
  const { userStoreData } = useUserStore();
  const { setOpenModal, setCloseModal } = useModalStore();
  const [isMailBoxOpen, setIsMailBoxOpen] = useState(false);
  // const location = useLocation();
  const [isViewMoreMenuOpen, setIsViewMoreMenuOpen] = useState<boolean>(false);
  const cookie = cookies;
  const viewMoreMenu = [
    {
      text: "우편함",
      onClick: () => {
        setOpenModal(<MailBox close={setCloseModal} />);
        setIsMailBoxOpen(true);
      },
      isSelectedPage: isMailBoxOpen,
      icon: <Mail width={22.5} />,
    },
    // {
    //   text: "설정",
    //   onClick: () => nav("/setting"),
    //   isSelectedPage: location.pathname === "/setting",
    //   icon: <Setting width={22.5}/>
    // },
    {
      text: "로그아웃",
      onClick: () => {
        cookie.removeCookie(ACCESS_TOKEN_KEY);
        cookie.removeCookie(REFRESH_TOKEN_KEY);
        alert("로그아웃되었습니다.");
        nav("/login");
      },
      isSelectedPage: false,
      icon: <Logout width={22.5} />,
    },
    // {
    //   text: "운영 정책",
    //   onClick: () => nav("/policy"),
    //   isSelectedPage: false,
    //   icon: <Info width={22.5}/>
    // },
  ];

  return useMemo(
    () => (
      <S.SidebarContainer $isLoading={isLoading.toString()}>
        <p>Legacy</p>
        <Suspense fallback={<SidebarUserInfoSkeleton />}>
          <SidebarUserInfo />
        </Suspense>
        <S.SidebarButtonMenu>
          {SIDEBAR_DATA.map((item) => (
            <LegacyButton
              key={item.text}
              width="100%"
              size="default"
              isBold={true}
              isFilled={false}
              color={item.color}
              handleClick={() => nav(item.url)}
              children={
                <S.SidebarMenuChildren>
                  <item.icon width={22.5} height={22.5} />
                  <p>{item.text}</p>
                </S.SidebarMenuChildren>
              }
            />
          ))}
          <LegacyButton
            width="100%"
            size="default"
            isBold={true}
            isFilled={false}
            color={LegacyPalette.lineNeutral}
            children={
              <S.ViewMoreMenuContainer>
                <button
                  onClick={() => setIsViewMoreMenuOpen((prev) => !prev)}
                  name="more-menu"
                >
                  <Menu width={22.5} height={22.5} />
                  <p>더보기</p>
                  <div style={{ flexGrow: 1 }} />
                  <S.ViewMoreMenuArrowDown
                    $isViewMoreMenuOpen={isViewMoreMenuOpen.toString()}
                  />
                </button>
                {isViewMoreMenuOpen && (
                  <S.ViewMoreMenuButtonContainer>
                    {viewMoreMenu.map((item) => (
                      <S.ViewMoreMenuButton
                        onClick={item.onClick}
                        $isAtv={`${item.isSelectedPage}`}
                      >
                        {item.icon}
                        <p>{item.text}</p>
                      </S.ViewMoreMenuButton>
                    ))}
                  </S.ViewMoreMenuButtonContainer>
                )}
              </S.ViewMoreMenuContainer>
            }
          />
        </S.SidebarButtonMenu>
      </S.SidebarContainer>
    ),
    [isViewMoreMenuOpen, userStoreData]
  );
};

export default Sidebar;
