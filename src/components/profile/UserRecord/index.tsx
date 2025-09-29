import * as S from "./style";
import ProgressBar from "@components/profile/UserRecord/ProgressBar";
import RecordItem from "@src/components/profile/UserRecord/RecordItem";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import useUserStore from "@src/store/useUserStore";

const UserRecord = () => {
  const {userStoreData: myUserData} = useUserStore();

  return (
    <S.UserRecordArea>
      <S.ProgressBars>
        <ProgressBar
          title="탐험"
          value={myUserData!.record!.experience.cardCount}
          max={226}
          barColor={LegacySementic.blue.netural}
          bgColor={LegacyPalette.fillNormal}
          label={`카드 ${myUserData?.record?.experience.cardCount}장 수집`}
        />
        {/* <ProgressBar
          title="시련"
          value={myUserData!.data.record!.maxFloor}
          max={200}
          barColor={LegacyPalette.primaryNormal}
          bgColor={LegacyPalette.fillNormal}
          label={`최고 ${myUserData?.data.record?.maxFloor}층`}
        /> */}
        <ProgressBar
          title="숙련"
          value={myUserData!.level}
          max={100}
          barColor={LegacySementic.red.normal}
          bgColor={LegacyPalette.fillNormal}
          label={`Lv. ${myUserData?.level}`}
        />
      </S.ProgressBars>
      <S.Records>
        기록
        <RecordItem title="탐험한 전체 블록 수" value={myUserData!.record!.adventure.allBlocks} unit="블록" />
        <RecordItem title="탐험한 유적지 블록 수" value={myUserData!.record!.adventure.ruinsBlocks} unit="블록" />
        <RecordItem title="수집한 모든 카드 수" value={myUserData!.record!.experience.cardCount} unit="장" />
        <RecordItem title="수집한 찬란한 카드 수" value={myUserData!.record!.adventure.allBlocks} unit="장" />
        {/* <RecordItem title="시련 최고 층수" value={userData.maxFloor} unit="층" />
        <RecordItem title="시련 최고 점수" value={userData.maxScore} unit="문명 점수" /> */}
      </S.Records>
    </S.UserRecordArea>
  );
};

export default UserRecord; 