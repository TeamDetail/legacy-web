import RecordItem from "@components/common/RecordItem";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useUserStore from "@src/store/useUserStore";
import styled from "styled-components";

const AchievementRecord = () => {
  const { userStoreData } = useUserStore();

  return (
    <AchievementRecordContainer>
      기록
      <AchievementRecordLevel>
        레벨
        <p>105Lv</p>
      </AchievementRecordLevel>
      <RecordItem title="완수한 일일 도전과제" value={300} unit="개"/>
      <RecordItem title="완수한 탐험 도전과제" value={200} unit="개"/>
      <RecordItem title="완수한 숙련 도전과제" value={103} unit="개"/>
    </AchievementRecordContainer>
  )
}

const AchievementRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
  padding: 20px 24px;
  border-radius: 20px;
  ${LegacyTypography.Pretendard.Heading2.Bold};
  color: ${LegacyPalette.labelNormal};
  background-color: ${LegacyPalette.backgroundNormal};
`

const AchievementRecordLevel = styled.div`
  display: flex;
  flex-direction: column;
  color: ${LegacyPalette.labelAlternative};
  ${LegacyTypography.Pretendard.Body2.Medium}

  > p {
    ${LegacyTypography.Pretendard.Title2.Bold};
    color: ${LegacySementic.yellow.netural};
  }
`
export default AchievementRecord