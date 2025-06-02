import { User } from '@src/types/user/user.type';
import * as S from './style';

import { sidebarData } from '@src/constants/sidebarData/sidebarData';
import LegacyButton from '../LegacyButton';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const nav = useNavigate();
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
            size="default"
            isBold={true}
            isFilled={false}
            color={item.color}
            handleClick={() => nav(item.url)}
            children={
              <S.SidebarMenuChildren>
                <item.icon width={16} height={16}/>
                {item.text}
              </S.SidebarMenuChildren>
            }
          />
        ))}
      </S.SidebarButtonMenu>
    </S.SidebarContainer>
  );
}

export default Sidebar