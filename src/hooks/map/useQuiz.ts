import quizApi from "@src/api/map/quiz.api";
import { useGetRuinQuiz } from "@src/queries/map/map.queries";
import { QuizAnswerResultType, QuizAnswerType } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";

const useQuiz = () => {
  const [ruinId, setRuinId] = useState<number | undefined>();
  const [isCorrect, setIsCorrect] = useState<QuizAnswerResultType>();

  const [quizAnswer, setQuizAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);

  const { data: ruinQuiz, refetch: getRuinQuiz } = useGetRuinQuiz(ruinId!);

  const getRuinQuizById = (id: number) => {
    setRuinId(id);
  };
  const checkQuizAnswerByQuizId = (quizAnswer: QuizAnswerType[]) => {
    setQuizAnswer(quizAnswer);
  };
  
  useEffect(() => {
    const checkAnswer = async () => {
      if (
        quizAnswer[0].answerOption &&
        quizAnswer[1].answerOption &&
        quizAnswer[2].answerOption
      ) {
        try {
          const result = await quizApi.checkRuinQuizAnswer(quizAnswer);
          setIsCorrect(result);
        } catch (e) {
          console.error("퀴즈 검증 실패:", e);
        }
      }
    };

    checkAnswer();
  }, [quizAnswer]);
  useEffect(() => {
    getRuinQuiz();
  }, [ruinId]);

  return {
    isCorrect,
    ruinQuiz,
    getRuinQuizById,
    checkQuizAnswerByQuizId,
  };
};

export default useQuiz;
