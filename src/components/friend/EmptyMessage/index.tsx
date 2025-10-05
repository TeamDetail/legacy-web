import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const EmptyMessage = ({
  text,
  subText,
}: {
  text: string;
  subText?: string;
}) => {
  return (
    <EmptyMessageContainer>
      {text}
      {subText && <span>{subText}</span>}
    </EmptyMessageContainer>
  );
};

export default EmptyMessage;

const EmptyMessageContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Heading2.Bold};
  color: ${LegacyPalette.labelNormal};

  span {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;
