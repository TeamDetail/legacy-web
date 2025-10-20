import { AchievementGrade } from "@src/types/achievement/achievement.type";
import styled from "styled-components";

type SizeType = "NORMAL" | "BIG";

interface AchievementImageType {
  size: SizeType;
  grade: AchievementGrade;
  iconType: string;
}

const AchievementImage = ({ size, grade, iconType }: AchievementImageType) => {
  return (
    <AchievementImageContainer $size={size}>
      <AchievementSvgIcon className="badge">
        <use href={`#${grade}`} />
      </AchievementSvgIcon>
      <AchievementSvgIcon className="icon">
        <use href={`#${iconType}`} />
      </AchievementSvgIcon>
    </AchievementImageContainer>
  );
};

export default AchievementImage;

const AchievementImageContainer = styled.div<{ $size: SizeType }>`
  width: ${({ $size }) => ($size === "BIG" ? "124px" : "64px")};
  height: ${({ $size }) => ($size === "BIG" ? "124px" : "64px")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AchievementSvgIcon = styled.svg`
  top: 0;
  left: 0;

  &.badge {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  &.icon {
    z-index: 2;
    width: 67%;
    height: 67%;
    top: auto;
    left: auto;
    fill: #000;
  }
`;
