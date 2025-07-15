import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const QuizComponentSkeleton = () => {
  return (
    <Quiz>
      <QuizTitleWrapper>
        <QuizTitle>Quiz 1</QuizTitle>
        <span></span>
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
    </Quiz>
  );
};

export default QuizComponentSkeleton;

const Quiz = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${LegacyPalette.backgroundNormal};
  gap: 20px;
  padding: 24px 36px;
  align-items: center;
  border-radius: 20px;
`;

const QuizTitle = styled.div`
  ${LegacyTypography.Pretendard.Title3.Bold}
  color: ${LegacyPalette.labelNormal};
`;

const QuizTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    ${LegacyTypography.Pretendard.Body2.Medium}
    color: ${LegacyPalette.labelAlternative};
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
    background-color: ${LegacyPalette.fillNormal};
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
