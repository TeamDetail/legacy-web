import { User } from '@src/types/user/user.type';
import * as S from './style';
import Menu from '@src/assets/sidebarIcon/menu.svg?react'
import ArrowDown from "@src/assets/arrowDown.svg?react"

import { sidebarData } from '@src/constants/sidebarData/sidebarData';
import LegacyButton from '../LegacyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { LegacyPalette } from '@src/constants/color/color';
import { useState } from 'react';

const Sidebar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isViewMoreMenuOpen, setIsViewMoreMenuOpen] = useState<boolean>(false);
  // const { myUserData } = useUser(true);
  
  const myUserData: User = {
    nickname : "박재민입니다",
    level:99,
    exp:999,
    credit:1000,
    stats:{
      snowflakeCapacity:10,
      forcedRestock:10,
      creditRecovery:10,
      dropCount:10,
    },
    allBlocks:100,
    ruinsBlocks:100,
    maxFloor:10,
    maxScore:10000,
    imageUrl:"",
    title: {
      name: "자본주의",
      content: "자본주의",
      grade: 3
    }
  }

  const viewMoreMenu = [
    {
      text: "우편함",
      onClick: () => nav("/mailbox"),
      isSelectedPage: location.pathname === "/mailbox"
    },
    {
      text: "설정",
      onClick: () => nav("/setting"),
      isSelectedPage: location.pathname === "/setting"
    },
    {
      text: "로그아웃",
      onClick: () => console.log("로그아웃 로직 추가 필요"),
      isSelectedPage: false
    },
    {
      text: "서비스 운영 정책",
      onClick: () => nav("/policy"),
      isSelectedPage: false
    },
    {
      text: "개인정보 처리 방침",
      onClick: () => nav("/privacy"),
      isSelectedPage: false
    },
  ]

  return (
    <S.SidebarContainer>
      <p>Legacy</p>
      <S.SidebarUserInfoContainer>
        <img src={myUserData?.imageUrl} alt="profileImg" />
        <section>
          <S.SidebarUserName>{myUserData?.nickname}</S.SidebarUserName>
          <p>{myUserData?.level || 10}Lv</p>
          {/* 이후에 title 삽입 */}
          <p>{myUserData?.title.name}</p>
        </section>
      </S.SidebarUserInfoContainer>
      <S.SidebarButtonMenu>
        {sidebarData.map((item) => (
          <LegacyButton
            width='100%'
            size="default"
            isBold={true}
            isFilled={false}
            color={item.color}
            handleClick={() => nav(item.url)}
            children={
              <S.SidebarMenuChildren>
                <item.icon width={20} height={20}/>
                {item.text}
              </S.SidebarMenuChildren>
            }
          />
        ))}
        <LegacyButton
          width='100%'
          size='default'
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
          children={
            <S.ViewMoreMenuContainer>
              <button onClick={() => setIsViewMoreMenuOpen((prev) => !prev)}>
                <Menu width={20} height={20}/>
                더보기
                <div style={{flexGrow:1}}/>
                <ArrowDown width={20} height={20} style={{transform: `scaleY(${isViewMoreMenuOpen ? 1 : -1})`}}/>
              </button>
              {isViewMoreMenuOpen && (
                <S.ViewMoreMenuButtonContainer>
                  {viewMoreMenu.map((item) => (
                    <S.ViewMoreMenuButton onClick={item.onClick} $isAtv={`${item.isSelectedPage}`}>
                      {item.text}
                    </S.ViewMoreMenuButton>
                  ))}
                </S.ViewMoreMenuButtonContainer>
              )}
            </S.ViewMoreMenuContainer>
          }
        />
      </S.SidebarButtonMenu>
    </S.SidebarContainer>
  );
}

export default Sidebar