import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const QuizComponentSkeleton = () => {
  return (
    <>
      <QuizTitleWrapper>
        <QuizTitle>
          Quiz 1<span />
        </QuizTitle>
        <span />
      </QuizTitleWrapper>
      <QuizContent>
        <QuizOption>
          <div />
          <div />
          <div />
          <div />
          <div />
        </QuizOption>
      </QuizContent>
      <ButtonContainer>
        <LegacyButton
          width="64px"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
        >
          <ButtonText>나가기</ButtonText>
        </LegacyButton>
        <LegacyButton
          width="100%"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacySementic.blue.netural}
        >
          <ButtonText>
            <span>힌트 확인하기</span>
          </ButtonText>
        </LegacyButton>
        <LegacyButton
          width="64px"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
        >
          <ButtonText>다음</ButtonText>
        </LegacyButton>
      </ButtonContainer>
    </>
  );
};

export default QuizComponentSkeleton;

const QuizTitle = styled.div`
  ${LegacyTypography.Pretendard.Title3.Bold}
  color: ${LegacyPalette.labelNormal};

  span {
    width: 93px;
    height: 18px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

const QuizTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  > span {
    width: 90%;
    height: 57px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

const QuizContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const QuizOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    width: 100%;
    height: 51px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const ButtonText = styled.div`
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacyPalette.labelAlternative};

  span {
    color: ${LegacySementic.blue.netural};
    ${LegacyTypography.Pretendard.Caption1.Bold};
  }
`;
