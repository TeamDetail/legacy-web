import { useState } from "react";
import ProgressBar from "@src/components/profile/ProgressBar";
import RecordItem from "@src/components/profile/UserRecord/RecordItem";
import * as S from "./style";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";

const UserRecord = () => {
  // Mock user data fetching
  const [userData] = useState({
    shiningCardCount: 200,
    cardCount: 300,
    allBlocks: 1234,
    ruinsBlocks: 567,
    maxFloor: 160,
    maxScore: 1320990000,
  });

  return (
    <S.UserRecordArea>
      <S.ProgressBars>
        <ProgressBar
          title="탐험"
          value={70}
          max={100}
          barColor={LegacySementic.blue.netural}
          bgColor={LegacyPalette.fillNormal}
          label={`카드 ${userData.cardCount}장 수집`}
        />
        <ProgressBar
          title="시련"
          value={70}
          max={100}
          barColor={LegacyPalette.primaryNormal}
          bgColor={LegacyPalette.fillNormal}
          label="최고 0층"
        />
        <ProgressBar
          title="숙련"
          value={70}
          max={100}
          barColor={LegacySementic.red.normal}
          bgColor={LegacyPalette.fillNormal}
          label="Lv. 0"
        />
      </S.ProgressBars>
      <S.Records>
        기록
        <RecordItem title="탐험한 전체 블록 수" value={userData.allBlocks} unit="블록" />
        <RecordItem title="탐험한 유적지 블록 수" value={userData.ruinsBlocks} unit="블록" />
        <RecordItem title="수집한 일반 카드 수" value={userData.cardCount} unit="장" />
        <RecordItem title="수집한 찬란 카드 수" value={userData.shiningCardCount} unit="장" />
        {/* <RecordItem title="시련 최고 층수" value={userData.maxFloor} unit="층" />
        <RecordItem title="시련 최고 점수" value={userData.maxScore} unit="문명 점수" /> */}
      </S.Records>
    </S.UserRecordArea>
  );
};

export default UserRecord; 