import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface ProgressBarProps {
  title?: string;
  max?: number;
  value: number;
  barColor: string;
  bgColor: string;
  label: string;
}

const ProgressBar = ({ title, max = 100, value, barColor, bgColor, label }: ProgressBarProps) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <BarWrapper>
      {title && <p>{title}</p>}
      <BarContainer $bgColor={bgColor}>
        <BarFill $barColor={barColor} $percent={percent} />
        <BarLabel>{label}</BarLabel>
      </BarContainer>
    </BarWrapper>
  );
};

export default ProgressBar;

const BarWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${LegacyPalette.labelNormal};

  > p {
    ${LegacyTypography.Pretendard.Headline.Bold};
    width: 52px;
  }
`
const BarContainer = styled.div<{ $bgColor: string }>`
  position: relative;
  width: 100%;
  height: 28px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const BarFill = styled.div<{ $barColor: string; $percent: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ $barColor }) => $barColor};
  transition: width 0.3s;
`;

const BarLabel = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${LegacyTypography.Pretendard.Body1.Bold};
  pointer-events: none;
  white-space: nowrap;
`; 