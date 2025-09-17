import * as S from './style';
import { UserRecordKeys } from '@src/types/user/user.type';
import LegacyButton from '@components/common/LegacyButton';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import OverViewItem from '@components/profile/OverView/OverViewItem';
import { userRecordMapper } from '@src/utils/textMapper/textMapper';
import useUserStore from '@src/store/useUserStore';
import { useState } from 'react';
// import ProfileFix from '@components/profile/OverView/ProfileFix';
import { toast } from 'react-toastify';

const OverView = () => {
  const [isProfileFixPage] = useState(false);
  const {userStoreData: overViewData} = useUserStore();

  return !isProfileFixPage ? (
    <S.OverViewContainer>
      <S.OverViewHeader>
        {overViewData.nickname}
        <LegacyButton
          size="default"
          isBold={false}
          isFilled={false}
          color={LegacyPalette.labelNormal}
          width="fit-content"
          // handleClick={() => setIsProfileFixPage(true)}
          handleClick={() => toast.error("개발 중인 기능입니다.")}
        >
          프로필 수정
        </LegacyButton>
      </S.OverViewHeader>
      <S.OverViewMainContainer>
        <S.OverViewSidebar>
          <img src={overViewData.imageUrl} alt="profile" />
        </S.OverViewSidebar>
        <S.OverViewMain>
          <OverViewItem
            headerText="탐험"
            mainRecordPrefix="총"
            mainRecord={overViewData.record.adventure.allBlocks + "블록"}
            mainRecordSuffix="탐험"
            rank={overViewData.record.adventure.rank}
            color={LegacySementic.blue.netural}
            detailItem={Object.entries(overViewData.record.adventure)
              .filter((item) => item[0] !== "rank")
              .map((item) => ({
                text: userRecordMapper[item[0] as UserRecordKeys],
                value: item[1],
              }))}
          />
          <OverViewItem
            headerText="숙련"
            mainRecord={"Lv." + overViewData.level}
            rank={overViewData.record.experience.rank}
            color={LegacySementic.red.netural}
            detailItem={Object.entries(overViewData.record.experience)
              .filter((item) => item[0] !== "rank")
              .map((item) => ({
                text: userRecordMapper[item[0] as UserRecordKeys],
                value: item[1],
              }))}
          />
        </S.OverViewMain>
      </S.OverViewMainContainer>
    </S.OverViewContainer>
  ) : (
    <></>
  )
}

export default OverView