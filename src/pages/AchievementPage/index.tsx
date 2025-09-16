import * as S from './style';
import { HeaderContainer, MainContainer } from "@src/styles/globalStyles"
import Sidebar from "@components/common/Sidebar"
import Achievement from '../../assets/sidebarIcon/achievement.svg?react'
import AchievementList from '@components/achievement/AchievementList';

const AchievementPage = () => {
  return (
    <S.AchievementPageContainer>
      <Sidebar/>
      <MainContainer>
        <HeaderContainer>
          <Achievement width={32} height={32}/>
          도전과제
        </HeaderContainer>
        <S.AchievementPageMainContainer>
          <AchievementList/>
        </S.AchievementPageMainContainer>
      </MainContainer>
    </S.AchievementPageContainer>
  )
}

export default AchievementPage