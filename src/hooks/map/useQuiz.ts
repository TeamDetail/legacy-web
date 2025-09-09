import quizApi from "@src/api/map/quiz.api";
import {
  useGetRuinQuiz,
} from "@src/queries/map/map.queries";
import { QuizAnswerType } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";

const useQuiz = () => {
  const [ruinId, setRuinId] = useState<number | undefined>();

  const [quizAnswer, setQuizAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);

  const { data: ruinQuiz, refetch: getRuinQuiz } = useGetRuinQuiz(ruinId!, {
    suspense: true,
  });

  const getRuinQuizById = (id: number) => {
    setRuinId(id);
  };
  const checkQuizAnswerByQuizId = (quizAnswer: QuizAnswerType[]) => {
    setQuizAnswer(quizAnswer);
  };

  useEffect(() => {
    if (
      quizAnswer[0].answerOption &&
      quizAnswer[1].answerOption &&
      quizAnswer[2].answerOption
    ) {
      quizApi.checkRuinQuizAnswer(quizAnswer);
    }
  }, [quizAnswer]);
  useEffect(() => {
    getRuinQuiz();
  }, [ruinId]);

  return {
    ruinQuiz,
    getRuinQuizById,
    checkQuizAnswerByQuizId,
  };
};

export default useQuiz;
