import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";

interface RecordItemProps {
  title: string;
  value: number;
  unit: string;
}

const RecordItem = ({ title, value, unit }: RecordItemProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>
        {value.toLocaleString()} {unit}
      </Value>
    </Container>
  );
};

export default RecordItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  color: ${LegacyPalette.labelAlternative};
  ${LegacyTypography.Pretendard.Body2.Medium}
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body2.Bold}
  background-color: ${LegacyPalette.fillNormal};
  padding: 0 16px;
  height: 44px;
  border-radius: 8px;
`;