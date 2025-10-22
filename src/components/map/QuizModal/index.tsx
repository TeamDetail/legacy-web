import * as S from "./style";
import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import useQuiz from "@src/hooks/map/useQuiz";
import { QuizAnswerType, RuinDetail } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";
import QuizCorrectPage from "../QuizCorrectPage";
import QuizWrongPage from "../QuizWrongPage";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import QuizUndefined from "@components/map/QuizUndefined";
import QuizHint from "@components/map/QuizModal/QuizHint";

const QuizModal = ({
  close,
  ruinDetail,
  getMyBlock,
}: {
  close: () => void;
  ruinDetail: RuinDetail;
  getMyBlock: () => Promise<void>;
}) => {
  const [solvingQuizNum, setSolvingQuizNum] = useState<0 | 1 | 2>(0);
  const [answer, setAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { isCorrect, checkQuizAnswerByQuizId, getRuinQuizById, ruinQuiz } =
    useQuiz();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleQuizChange = (newQuizNum: 0 | 1 | 2) => {
    if (newQuizNum === solvingQuizNum) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSolvingQuizNum(newQuizNum);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (isCorrect) {
      setIsSubmit(true);
    }
  }, [isCorrect]);

  const handleClose = () => {
    queryClient.removeQueries([QUERY_KEYS.quiz.checkRuinQuizAnswer]);
    close();
  };

  useEffect(() => getRuinQuizById(ruinDetail.ruinsId), []);

  if (ruinQuiz?.length === 0) {
    return <QuizUndefined close={close} />;
  }

  return (
    <>
      {isSubmit ? (
        isCorrect?.blockGiven ? (
          <QuizCorrectPage
            closeFunction={handleClose}
            ruinDetail={ruinDetail!}
            getMyBlock={getMyBlock}
          />
        ) : (
          <QuizWrongPage closeFunction={handleClose} isCorrect={isCorrect!} />
        )
      ) : (
        ruinQuiz && (
          <S.Quiz>
            <S.QuizTitleWrapper>
              <S.QuizTitle>Quiz {solvingQuizNum + 1}</S.QuizTitle>
              <span>{ruinDetail?.name}</span>
            </S.QuizTitleWrapper>

            <S.QuizContentContainer>
              <S.QuizContent $isAnimating={isAnimating}>
                <S.QuizTitle>
                  {ruinQuiz![solvingQuizNum].quizProblem}
                </S.QuizTitle>
                <S.QuizOption>
                  {ruinQuiz![solvingQuizNum].optionValue?.map(
                    (option, index) => (
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
                        <S.OptionText
                          $isSelected={
                            answer[solvingQuizNum].answerOption === option
                          }
                        >
                          {option}
                        </S.OptionText>
                      </LegacyButton>
                    )
                  )}
                </S.QuizOption>
              </S.QuizContent>
            </S.QuizContentContainer>

            <S.ButtonContainer>
              <LegacyButton
                width="72px"
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
              <QuizHint quizId={ruinQuiz[solvingQuizNum].quizId}/>
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
            </S.ButtonContainer>
          </S.Quiz>
        )
      )}
    </>
  );
};

export default QuizModal;
