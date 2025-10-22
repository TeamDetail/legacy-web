import quizApi from "@src/api/map/quiz.api";
import { useGetRuinQuiz } from "@src/queries/map/map.queries";
import useUserStore from "@src/store/useUserStore";
import { QuizAnswerResultType, QuizAnswerType } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryClient } from "@tanstack/react-query";

const useQuiz = () => {
  const { setUserData, userStoreData } = useUserStore();
  const [ruinId, setRuinId] = useState<number | undefined>();
  const [isCorrect, setIsCorrect] = useState<QuizAnswerResultType>();
  const queryClient = useQueryClient();

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
    getRuinQuiz().then((data) => {
      setUserData({...userStoreData, credit: data.data![0].userTotalCredit})
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.quiz.getQuizCost,
        refetchType: "active",
      });
    });
  }, [ruinId]);

  return {
    isCorrect,
    ruinQuiz,
    getRuinQuizById,
    checkQuizAnswerByQuizId,
  };
};

export default useQuiz;
