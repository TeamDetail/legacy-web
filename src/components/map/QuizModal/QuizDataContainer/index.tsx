import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import * as S from "./style";
import LegacyButton from "@components/common/LegacyButton";
import QuizHint from "./QuizHint";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { QuizAnswerType, RuinDetail } from "@src/types/map/ruin.type";
import { useGetRuinQuiz } from "@src/queries/map/map.queries";
import useUserStore from "@src/store/useUserStore";
import { useQueryClient as useQueryClientV5 } from "@tanstack/react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryClient as useQueryClientV3 } from "react-query";
import { toast } from "react-toastify";

interface QuizDataContainerType {
  ruinDetail: RuinDetail;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
  answer: QuizAnswerType[];
  setAnswer: Dispatch<SetStateAction<QuizAnswerType[]>>;
  close: () => void;
}

const QuizDataContainer = ({
  ruinDetail,
  setIsSubmit,
  answer,
  setAnswer,
  close,
}: QuizDataContainerType) => {
  const { userStoreData, setUserData } = useUserStore();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [solvingQuizNum, setSolvingQuizNum] = useState<0 | 1 | 2>(0);
  const queryClientV5 = useQueryClientV5();
  const queryClientV3 = useQueryClientV3();

  const { data: ruinQuiz } = useGetRuinQuiz(ruinDetail.ruinsId);

  const handleQuizChange = (newQuizNum: 0 | 1 | 2) => {
    if (newQuizNum === solvingQuizNum) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSolvingQuizNum(newQuizNum);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    setUserData({ ...userStoreData, credit: ruinQuiz![0].userTotalCredit });
    queryClientV5.invalidateQueries({
      queryKey: QUERY_KEYS.quiz.getQuizCost,
      refetchType: "active",
    });
  }, ruinQuiz);

  return (
    <>
      <S.QuizTitleWrapper>
        <S.QuizTitle>Quiz {solvingQuizNum + 1}</S.QuizTitle>
        <span>{ruinDetail?.name}</span>
      </S.QuizTitleWrapper>
      <S.QuizContentContainer>
        <S.QuizContent $isAnimating={isAnimating}>
          <S.QuizTitle>{ruinQuiz![solvingQuizNum].quizProblem}</S.QuizTitle>
          <S.QuizOption>
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
                <S.OptionText
                  $isSelected={answer[solvingQuizNum].answerOption === option}
                >
                  {option}
                </S.OptionText>
              </LegacyButton>
            ))}
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
              queryClientV3.removeQueries({
                queryKey: [`mapGetRuinQuiz/${ruinDetail.ruinsId}`],
              });
              close();
            } else {
              handleQuizChange((solvingQuizNum - 1) as 0 | 1 | 2);
            }
          }}
          customStyle={{ textWrap: "nowrap" }}
        >
          {solvingQuizNum === 0 ? "나가기" : "이전"}
        </LegacyButton>
        <QuizHint quizId={ruinQuiz![solvingQuizNum].quizId} />
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
                toast.error("모든 문제에 답변을 선택해주세요!");
                return;
              }

              setIsSubmit(true);
            }
          }}
        >
          다음
        </LegacyButton>
      </S.ButtonContainer>
    </>
  );
};

export default QuizDataContainer;
