import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface QuizCheckFailProps {
  close: () => void;
}

const QuizCheckFail = ({ close }: QuizCheckFailProps) => {
  return (
    <QuizCheckFailContainer>
      퀴즈 정답 확인을 실패했어요...
      <LegacyButton
        isBold
        isFilled={false}
        size="default"
        color={LegacySementic.blue.netural}
        children={<ButtonText>돌아가기</ButtonText>}
        handleClick={close}
      />
    </QuizCheckFailContainer>
  );
};

export default QuizCheckFail;

const QuizCheckFailContainer = styled.div`
  width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;

  ${LegacyTypography.Pretendard.Title3.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const ButtonText = styled.div`
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacySementic.blue.netural};
`;
