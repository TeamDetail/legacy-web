import styled, { keyframes } from "styled-components";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { LegacyPalette } from "@src/constants/color/color";

const QuizCheckSkeleton = () => {
  return (
    <Container>
      <Dots>
        <Dot delay="0s" />
        <Dot delay="0.2s" />
        <Dot delay="0.4s" />
      </Dots>
      <Message>퀴즈 정답 확인 중...</Message>
    </Container>
  );
};

export default QuizCheckSkeleton;

// 중앙 배치 컨테이너
const Container = styled.div`
  width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
`;

// 위아래로 움직이는 애니메이션
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0.6;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Dot = styled.div<{ delay: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${LegacyPalette.primaryNormal};
  animation: ${bounce} 0.9s infinite;
  animation-delay: ${({ delay }) => delay};
`;

// 텍스트
const Message = styled.div`
  margin-top: 24px;
  ${LegacyTypography.Pretendard.Title1.Bold};
  color: ${LegacyPalette.labelNormal};
`;
