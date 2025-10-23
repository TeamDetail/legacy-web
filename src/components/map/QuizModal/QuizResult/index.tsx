import { useCheckQuizAnswer } from "@src/queries/map/map.queries";
import { QuizAnswerType, RuinDetail } from "@src/types/map/ruin.type";
import QuizCorrectPage from "./QuizCorrectPage";
import QuizWrongPage from "./QuizWrongPage";
import { useQueryClient } from "@tanstack/react-query";

interface QuizResultProps {
  quizAnswer: QuizAnswerType[];
  close: () => void;
  ruinDetail: RuinDetail;
}

const QuizResult = ({ quizAnswer, close, ruinDetail }: QuizResultProps) => {
  const { data: isCorrect } = useCheckQuizAnswer(quizAnswer);
  const queryClient = useQueryClient();

  const removeQueryCaching = () => {
    queryClient.removeQueries({
      queryKey: ["quizCheckRuinQuizAnswer"],
    });
  };

  return isCorrect.blockGiven ? (
    <QuizCorrectPage
      close={close}
      ruinDetail={ruinDetail}
      removeQueries={removeQueryCaching}
    />
  ) : (
    <QuizWrongPage
      close={close}
      isCorrect={isCorrect}
      removeQueries={removeQueryCaching}
    />
  );
};

export default QuizResult;
