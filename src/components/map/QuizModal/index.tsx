import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useRuin from "@src/hooks/map/useRuin";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface QuizAnswerType {
  0: string;
  1: string;
  2: string;
}

const QuizModal = ({ close }: { close: () => void }) => {
  const [solvingQuizNum, setSolvingQuizNum] = useState<0 | 1 | 2>(0);
  const [answer, setAnswer] = useState<QuizAnswerType>({ 0: "", 1: "", 2: "" });
  const [isAnimating, setIsAnimating] = useState(false);
  const { ruinDetail, ruinQuiz } = useRuin();

  const handleQuizChange = (newQuizNum: 0 | 1 | 2) => {
    if (newQuizNum === solvingQuizNum) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSolvingQuizNum(newQuizNum);
      setIsAnimating(false);
    }, 300); // 애니메이션의 절반 시점에서 내용 변경
  };

  useEffect(() => {
    console.log(ruinQuiz);
  }, [ruinQuiz]);

  return ruinDetail && ruinQuiz ? (
    <Quiz>
      <QuizTitleWrapper>
        <QuizTitle>Quiz {solvingQuizNum + 1}</QuizTitle>
        <span>{ruinDetail?.name}</span>
      </QuizTitleWrapper>

      <QuizContentContainer>
        <QuizContent $isAnimating={isAnimating}>
          <QuizTitle>{ruinQuiz![solvingQuizNum].quizProblem}</QuizTitle>
          <QuizOption>
            {ruinQuiz![solvingQuizNum].optionValue?.map((option, index) => (
              <LegacyButton
                key={index}
                size="big"
                isBold={true}
                isFilled={false}
                color={
                  answer[solvingQuizNum] === option
                    ? LegacySementic.purple.normal
                    : LegacyPalette.lineNeutral
                }
                width="100%"
                handleClick={() => {
                  setAnswer((prev) => ({ ...prev, [solvingQuizNum]: option }));
                }}
              >
                <OptionText $isSelected={answer[solvingQuizNum] === option}>
                  {option}
                </OptionText>
              </LegacyButton>
            ))}
          </QuizOption>
        </QuizContent>
      </QuizContentContainer>

      <ButtonContainer>
        <LegacyButton
          width="69px"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
          handleClick={() => {
            if (solvingQuizNum === 0) {
              close();
            } else {
              handleQuizChange((solvingQuizNum - 1) as 0 | 1 | 2);
            }
          }}
        >
          {solvingQuizNum === 0 ? "나가기" : "이전"}
        </LegacyButton>
        <LegacyButton
          width="100%"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacySementic.blue.netural}
        >
          <span>힌트 확인하기</span>
        </LegacyButton>
        <LegacyButton
          width="69px"
          size="default"
          isBold={true}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
          handleClick={() => {
            if (solvingQuizNum < ruinQuiz!.length - 1) {
              handleQuizChange((solvingQuizNum + 1) as 0 | 1 | 2);
            }
          }}
        >
          다음
        </LegacyButton>
      </ButtonContainer>
    </Quiz>
  ) : (
    <div></div>
  );
};

export default QuizModal;

const Quiz = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${LegacyPalette.backgroundNormal};
  gap: 20px;
  padding: 24px 36px;
  align-items: center;
  border-radius: 20px;
  text-align: center;
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

const QuizContentContainer = styled.div`
  width: 100%;
`;

const QuizContent = styled.div<{ $isAnimating: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  opacity: ${({ $isAnimating }) => ($isAnimating ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;
`;

const QuizOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacyPalette.labelAlternative};

  span {
    color: ${LegacySementic.blue.netural};
    ${LegacyTypography.Pretendard.Caption1.Bold};
  }
`;

const OptionText = styled.div<{ $isSelected: boolean }>`
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${({ $isSelected }) =>
    $isSelected ? LegacySementic.purple.normal : LegacyPalette.labelNormal};
`;
