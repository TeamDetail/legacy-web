import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const DailyDataSkeleton = () => {
  return (
    <DailyDataContainer>
      <MenubadgeSkeleton>
        <div />
        <div />
        <div />
      </MenubadgeSkeleton>
      <DailyDataWrapper>
        <DailyCalendarContainer>
          <header />
          <div>
            {Array.from({ length: 30 }).map((_, idx) => (
              <div key={idx} />
            ))}
          </div>
        </DailyCalendarContainer>
        <DailyRewardContainer>
          <DailyRewardWrapper>
            <span />
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} />
            ))}
          </DailyRewardWrapper>
          <LegacyButton
            size="default"
            isBold
            isFilled={false}
            color={LegacyPalette.primaryNormal}
            children={<ButtonText $disabled={false}>출석하기</ButtonText>}
            width="100%"
          />
        </DailyRewardContainer>
      </DailyDataWrapper>
    </DailyDataContainer>
  );
};

export default DailyDataSkeleton;

const DailyDataContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const DailyDataWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const MenubadgeSkeleton = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  div {
    height: 23.6px;
    width: 75px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

const DailyCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > header {
    height: 15.6px;
    width: 100%;
    ${skeletonAnimtaion}
    border-radius: 4px;
  }

  > div {
    width: 320px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 8px;

    div {
      aspect-ratio: 1/1;
      border-radius: 8px;
      ${skeletonAnimtaion}
    }
  }
`;

const DailyRewardContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DailyRewardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 8px;
  gap: 8px;

  span {
    width: 130px;
    height: 21px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }

  div {
    width: 100%;
    height: 15.6px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

const ButtonText = styled.div<{ $disabled: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${({ $disabled }) =>
    $disabled ? LegacyPalette.labelDisabled : LegacyPalette.primaryNormal};
`;
