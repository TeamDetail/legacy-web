import { LegacyPalette } from "@src/constants/color/color";
import { QuizAnswerType, RuinDetail } from "@src/types/map/ruin.type";
import { Suspense, useState } from "react";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@src/queries/queryKey";
import styled from "styled-components";
import QuizDataContainer from "./QuizDataContainer";
import QuizResult from "./QuizResult";
import QuizComponentSkeleton from "@components/skeleton/QuizComponentSkeleton";
import QuizCheckSkeleton from "@components/skeleton/QuizCheckSkeleton";

const QuizModal = ({
  close,
  ruinDetail,
}: {
  close: () => void;
  ruinDetail: RuinDetail;
}) => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [answer, setAnswer] = useState<QuizAnswerType[]>([
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
    { quizId: null, answerOption: "" },
  ]);

  const handleClose = () => {
    queryClient.removeQueries([QUERY_KEYS.quiz.checkRuinQuizAnswer]);
    close();
  };

  return (
    <Quiz>
      {isSubmit ? (
        <Suspense fallback={<QuizCheckSkeleton />}>
          <QuizResult
            quizAnswer={answer}
            close={handleClose}
            ruinDetail={ruinDetail}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<QuizComponentSkeleton />}>
          <QuizDataContainer
            ruinDetail={ruinDetail}
            setIsSubmit={setIsSubmit}
            answer={answer}
            setAnswer={setAnswer}
            close={close}
          />
        </Suspense>
      )}
    </Quiz>
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
