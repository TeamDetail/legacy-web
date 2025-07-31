import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useQuiz from "@src/hooks/map/useQuiz";
import useRuin from "@src/hooks/map/useRuin";
import { QuizAnswerType } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QuizCorrectPage from "../QuizCorrectPage";
import QuizWrongPage from "../QuizWrongPage";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import customAxios from "@src/libs/axios/customAxios";
import useUserStore from "@src/store/useUserStore";
import QuizUndefined from "@components/map/QuizUndefined";

const QuizModal = ({ close }: { close: () => void }) => {
  const [solvingQuizNum, setSolvingQuizNum] = useState<0 | 1 | 2>(0);
  const [answer, setAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { ruinDetail, ruinQuiz } = useRuin();
  const { isAnswerCorrect, checkQuizAnswerByQuizId } = useQuiz();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { userStoreData } = useUserStore();

  const handleQuizChange = (newQuizNum: 0 | 1 | 2) => {
    if (newQuizNum === solvingQuizNum) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSolvingQuizNum(newQuizNum);
      setIsAnimating(false);
    }, 300);
  };

  const resetUserQuiz = async () => {
    await customAxios.delete(`quiz/quiz-history/reset/${userStoreData.userId}`);
  };

  useEffect(() => {
    if (isAnswerCorrect) {
      if (isAnswerCorrect.blockGiven) {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.block.getMyBlock],
        });
      } else {
        resetUserQuiz();
      }
      setIsSubmit(true);
    }
  }, [isAnswerCorrect]);

  const handleClose = () => {
    queryClient.removeQueries([QUERY_KEYS.quiz.checkRuinQuizAnswer]);
    close(); // 원래의 닫기 함수
  };

  if (ruinQuiz?.length === 0) {
    return <QuizUndefined close={close} />;
  }
  return ruinDetail && ruinQuiz ? (
    isSubmit ? (
      isAnswerCorrect?.blockGiven ? (
        <QuizCorrectPage closeFunction={handleClose} />
      ) : (
        <QuizWrongPage closeFunction={handleClose} />
      )
    ) : (
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
                    answer[solvingQuizNum].answerOption === option
                      ? LegacySementic.purple.normal
                      : LegacyPalette.lineNeutral
                  }
                  width="100%"
                  handleClick={() => {
                    const selectedQuiz = ruinQuiz![solvingQuizNum];
                    const selectedOption = option;

                    setAnswer((prev) =>
                      prev.map((item, index) =>
                        index === solvingQuizNum
                          ? {
                              quizId: selectedQuiz.quizId ?? null,
                              answerOption: selectedOption,
                            }
                          : item
                      )
                    );
                  }}
                >
                  <OptionText
                    $isSelected={answer[solvingQuizNum].answerOption === option}
                  >
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
              } else {
                const isAnyInvalid = answer.some(
                  (item) => item.quizId === null || item.answerOption === ""
                );

                if (isAnyInvalid) {
                  alert("모든 문제에 답변을 선택해주세요!");
                  return;
                }

                checkQuizAnswerByQuizId(answer);
              }
            }}
          >
            다음
          </LegacyButton>
        </ButtonContainer>
      </Quiz>
    )
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
