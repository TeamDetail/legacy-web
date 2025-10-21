import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const EmptyTitleMessage = () => {
  return (
    <EmptyTitleMessageContainer>
      아직 얻은 칭호가 없어요!
      <span>도전과제 달성을 통해 여러가지 칭호를 얻을 수 있어요.</span>
    </EmptyTitleMessageContainer>
  );
};

export default EmptyTitleMessage;

const EmptyTitleMessageContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Title3.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;
