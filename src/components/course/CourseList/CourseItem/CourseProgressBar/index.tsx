import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface ProgressBarProps {
  title?: string;
  max?: number;
  value: number;
  barColor: string;
  bgColor: string;
}

const CourseProgressBar = ({
  max = 100,
  value,
  barColor,
  bgColor,
}: ProgressBarProps) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <BarContainer $bgColor={bgColor}>
      <BarFill $barColor={barColor} $percent={percent} />
      <BarLabel>
        {value} / {max}
      </BarLabel>
    </BarContainer>
  );
};

export default CourseProgressBar;

const BarContainer = styled.div<{ $bgColor: string }>`
  position: relative;
  width: 84px;
  height: 28px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 999px;
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
  color: ${LegacyPalette.labelNeutral};
  pointer-events: none;
  white-space: nowrap;
`;
