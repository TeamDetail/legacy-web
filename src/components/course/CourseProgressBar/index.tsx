import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface ProgressBarProps {
  title?: string;
  max?: number;
  value: number;
  barColor: string;
  bgColor: string;
  width: string;
}

const CourseProgressBar = ({
  max = 100,
  value,
  barColor,
  bgColor,
  width,
}: ProgressBarProps) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <BarContainer $bgColor={bgColor} $width={width}>
      <BarFill $barColor={barColor} $percent={percent} />
      <BarLabel>
        {value} / {max}
      </BarLabel>
    </BarContainer>
  );
};

export default CourseProgressBar;

const BarContainer = styled.div<{ $bgColor: string; $width: string }>`
  position: relative;
  width: ${({ $width }) => $width};
  min-height: 28px;
  height: 28px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
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
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNeutral};
  pointer-events: none;
  white-space: nowrap;
`;
