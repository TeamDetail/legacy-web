import { LegacyPalette } from "@src/constants/color/color";
import useQuiz from "@src/hooks/map/useQuiz";
import styled from "styled-components";
import SadEmoji from "@src/assets/loudly-crying-face-svgrepo-com 1.svg";
import CloseImg from "@src/assets/close.svg";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { QuizAnswerResultType } from "@src/types/map/ruin.type";

const QuizWrongPage = ({ closeFunction }: { closeFunction: () => void }) => {
  const { isAnswerCorrect } = useQuiz();

  const WrongAnswersMessage = ({
    quizResult,
  }: {
    quizResult: QuizAnswerResultType;
  }) => {
    const wrongNumbers = quizResult.results
      .map((r, i) => (!r.isCorrect ? i + 1 : null))
      .filter((n): n is number => n !== null);

    const wrongNumbersText = wrongNumbers.join(", ");

    return (
      <span>
        {wrongNumbersText}번 문제의 답이 잘못되었어요.
        <br />
        다시 도전하면 맞출 수 있을거에요!
      </span>
    );
  };

  return (
    <QuizResultWrapper>
      <MessageContainer>
        <SadImg />
        전부 맞추지 못했어요...
        {WrongAnswersMessage({ quizResult: isAnswerCorrect! })}
      </MessageContainer>

      <div
        onClick={() => {
          closeFunction();
        }}
      >
        <CloseButton />
      </div>
    </QuizResultWrapper>
  );
};

export default QuizWrongPage;

const QuizResultWrapper = styled.div`
  width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${LegacyPalette.backgroundNormal};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  text-align: center;
  position: relative;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Title2.Bold};
  span {
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Headline.Medium}
  }
  align-items: center;
`;

const CloseButton = styled.img.attrs({ src: CloseImg })`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 28px;
  left: 28px;
`;

const SadImg = styled.img.attrs({ src: SadEmoji })`
  width: 108px;
  height: 108px;
`;
