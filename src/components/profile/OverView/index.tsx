import * as S from './style';
import { UserRecordKeys } from '@src/types/user/user.type';
import { LegacySementic } from '@src/constants/color/color';
import OverViewItem from '@components/profile/OverView/OverViewItem';
import { userRecordMapper } from '@src/utils/textMapper/textMapper';
import useUserStore from '@src/store/useUserStore';

const OverView = () => {
  const {userStoreData: overViewData} = useUserStore();

  return (
    <S.OverViewContainer>
      <header>
        {overViewData.nickname}
      </header>
      <S.OverViewMainContainer>
        <S.OverViewSidebar>
          <S.OverViewUserImg $img={overViewData.imageUrl}/>
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
  );
}

export default OverView