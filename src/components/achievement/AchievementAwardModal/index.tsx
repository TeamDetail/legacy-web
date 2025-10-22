import Item from "@components/common/Item"
import LegacyButton from "@components/common/LegacyButton"
import { LegacyPalette, LegacySementic } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken"
import { AchievementAwardResponse } from "@src/types/achievement/achievement.type"
import styled from "styled-components"
import Crying from "@src/assets/crying-face.svg?react"

type AwardModalProps = {
  close: () => void;
  data: AchievementAwardResponse;
}
const AchievementAwardModal = ({ data, close }: AwardModalProps) => {
  return data.awardCredit !== 0 &&
    data.awardExp !== 0 &&
    data.achievementAward.length !== 0 ? (
    <AwardModal>
      <section>
        <p>보상 수령 완료</p>
        <span>도전과제 완료를 축하드려요!</span>
      </section>
      <AwardTextLineContainer>
        <AwardTextLine>
          <p>획득 크레딧</p>
          <span>{data.awardCredit}</span>
        </AwardTextLine>
        <AwardTextLine>
          <p>획득 경험치</p>
          <span>{data.awardCredit}</span>
        </AwardTextLine>
      </AwardTextLineContainer>
      <AwardItemList>
        {data?.achievementAward.map((item) => (
          <Item itemType={item.itemType} size="normal" />
        ))}
      </AwardItemList>
      <LegacyButton
        size="default"
        color={LegacyPalette.lineNeutral}
        isBold
        isFilled={false}
        handleClick={close}
      >
        <AwardCloseText>닫기</AwardCloseText>
      </LegacyButton>
    </AwardModal>
  ) : (
    <AwardNotThing>
      <Crying />
      <p>수령한 보상이 없어요..</p>
      <LegacyButton
        size="default"
        color={LegacyPalette.lineNeutral}
        isBold
        isFilled={false}
        handleClick={close}
      >
        <AwardCloseText>닫기</AwardCloseText>
      </LegacyButton>
    </AwardNotThing>
  );
}

export default AchievementAwardModal

const AwardModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px 24px 20px;
  border-radius: 20px;
  gap: 20px;
  width: 320px;
  background-color: ${LegacyPalette.backgroundNormal};
  > section {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    > p {
      ${LegacyTypography.Pretendard.Heading2.Bold}
      color: ${LegacySementic.yellow.netural};
    }
    > span {
      ${LegacyTypography.Pretendard.Caption1.Medium}
      color: ${LegacyPalette.labelAlternative};
    }
  }
`
const AwardItemList = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const AwardCloseText = styled.p`
  color: ${LegacyPalette.labelAssistive};
`

const AwardTextLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${LegacyPalette.labelNormal};
  > p {
    ${LegacyTypography.Pretendard.Body1.Bold}
  }
  > span {
    ${LegacyTypography.Pretendard.Body2.Medium}
  }
`
const AwardTextLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

const AwardNotThing = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 280px;
  padding: 36px;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  > p {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.Pretendard.Headline.Bold}
  }
`