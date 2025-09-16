import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const Quiz = styled.div`
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

export const QuizTitle = styled.div`
  ${LegacyTypography.Pretendard.Title3.Bold}
  color: ${LegacyPalette.labelNormal};
`;

export const QuizTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    ${LegacyTypography.Pretendard.Body2.Medium}
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const QuizContentContainer = styled.div`
  width: 100%;
`;

export const QuizContent = styled.div<{ $isAnimating: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  opacity: ${({ $isAnimating }) => ($isAnimating ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;
`;

export const QuizOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;

  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacyPalette.labelAlternative};

  span {
    color: ${LegacySementic.blue.netural};
    ${LegacyTypography.Pretendard.Caption1.Bold};
  }
`;

export const OptionText = styled.div<{ $isSelected: boolean }>`
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${({ $isSelected }) =>
    $isSelected ? LegacySementic.purple.normal : LegacyPalette.labelNormal};
`;
