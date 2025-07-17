import { useCheckRuinQuizAnswer } from "@src/queries/map/map.queries";
import { QuizAnswerType } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";

const useQuiz = () => {
  const [quizAnswer, setQuizAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);

  const { data: isAnswerCorrect, refetch: checkAnswer } =
    useCheckRuinQuizAnswer(quizAnswer, {
      enabled: false,
    });

  const checkQuizAnswerByQuizId = (quizAnswer: QuizAnswerType[]) => {
    setQuizAnswer(quizAnswer);
  };

  useEffect(() => {
    if (
      quizAnswer[0].answerOption &&
      quizAnswer[1].answerOption &&
      quizAnswer[2].answerOption
    ) {
      checkAnswer();
    }
  }, [quizAnswer]);

  return {
    isAnswerCorrect,
    checkQuizAnswerByQuizId,
  };
};

export default useQuiz;
