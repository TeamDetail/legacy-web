import { useState } from 'react';
import * as S from './style';
import { User, UserRecordKeys } from '@src/types/user/user.type';
import LegacyButton from '@components/common/LegacyButton';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import OverViewItem from '@components/profile/OverView/OverViewItem';
import { userRecordMapper } from '@src/utils/textMapper/textMapper';

const OverView = () => {
  const [overViewData] = useState<User>({
    userId: 1,
    nickname: "park",
    imageUrl:
      "https://shiftpsh-blog.s3.amazonaws.com/uploads/2022/04/listing216.png",
    description: "나는 박재민",
    level: 10,
    title: {
      name: "자본주의",
      content: "칭호 설명 예시",
      grade: 1,
      titleId: 1,
    },
    record: {
      adventure: {
        rank: 10,
        allBlocks: 10000,
        ruinsBlocks: 10,
        solvedQuizs: 100,
        wrongQuizs: 100,
        commentCount: 20,
        makeCourse: 102,
        clearCourse: 100,
      },
      experience: {
        rank: 1,
        adventureAchieve: 99,
        hiddenAchieve: 100,
        experienceAchieve: 123,
        createdAt: "2025-09-25",
        titleCount: 21,
        cardCount: 200,
      },
    },
  });

  return (
    <S.OverViewContainer>
      <S.OverViewHeader>
        {overViewData.nickname}
        <LegacyButton
          size="default"
          isBold={false}
          isFilled={false}
          color={LegacyPalette.labelNormal}
          width="fit-content"
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
  );
}

export default OverView