import * as S from "./style";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_DATA } from "@src/constants/sidebarData/sidebarData";
import LegacyButton from "../LegacyButton";
import SidebarUserInfo from "../SidebarUserInfo";
import SidebarUserInfoSkeleton from "@components/skeleton/SidebarUserInfoSkeleton";
// import Menu from "@src/assets/sidebarIcon/menu.svg?react";
// import { LegacyPalette } from "@src/constants/color/color";
// import Mail from "@src/assets/sidebarIcon/mail.svg?react";
// import Setting from "@src/assets/sidebarIcon/setting.svg?react";
// import Logout from "@src/assets/sidebarIcon/logout.svg?react";
// import Info from "@src/assets/sidebarIcon/info.svg?react";
// import cookies from "@src/libs/cookie/cookie";
// import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@src/constants/token.constants";

interface SidebarProps {
  isLoading?: boolean;
}

const Sidebar = ({isLoading = false}: SidebarProps) => {
  const nav = useNavigate();
  // const location = useLocation();
  // const [isViewMoreMenuOpen, setIsViewMoreMenuOpen] = useState<boolean>(false);
  
  // const viewMoreMenu = [
  //   {
  //     text: "우편함",
  //     onClick: () => nav("/mailbox"),
  //     isSelectedPage: location.pathname === "/mailbox",
  //     icon: <Mail width={22.5}/>
  //   },
  //   {
  //     text: "설정",
  //     onClick: () => nav("/setting"),
  //     isSelectedPage: location.pathname === "/setting",
  //     icon: <Setting width={22.5}/>
  //   },
  //   {
  //     text: "로그아웃",
  //     onClick: () => () => {
  //       cookie.removeCookie(ACCESS_TOKEN_KEY);
  //       cookie.removeCookie(REFRESH_TOKEN_KEY);
  //       nav("/");
  //     },
  //     isSelectedPage: false,
  //     icon: <Logout width={22.5}/>
  //   },
  //   {
  //     text: "운영 정책",
  //     onClick: () => nav("/policy"),
  //     isSelectedPage: false,
  //     icon: <Info width={22.5}/>
  //   },
  // ];
  // const cookie = cookies;
  
  return (
    <S.SidebarContainer
      $isLoading={isLoading.toString()}
    >
      <p>Legacy</p>
      <Suspense fallback={<SidebarUserInfoSkeleton />}>
        <SidebarUserInfo />
      </Suspense>
      <S.SidebarButtonMenu>
        {SIDEBAR_DATA.map((item) => (
          <LegacyButton
            key={item.text}
            width='100%'
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
        {/* <LegacyButton
          width="100%"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
          children={
            <S.ViewMoreMenuContainer>
              <button onClick={() => setIsViewMoreMenuOpen((prev) => !prev)}>
                <Menu width={22.5} height={22.5} />
                <p>더보기</p>
                <div style={{ flexGrow: 1 }} />
                <S.ViewMoreMenuArrowDown $isViewMoreMenuOpen={isViewMoreMenuOpen.toString()}/>
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
        /> */}
      </S.SidebarButtonMenu>
    </S.SidebarContainer>
  );
};

export default Sidebar;
