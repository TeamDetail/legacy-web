import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import CourseProgressBar from "../CourseProgressBar";
import CourseToggleButton from "./CourseToggleButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "@components/common/Tag";

interface CourseItemProps {
  thumbnailUrl: string;
  courseLength: number;
  clearRuinsCount: number;
  courseDetail: string;
  courseName: string;
  eventId: number | null;
  tags: string[];
  isHeart: boolean;
  isClear: boolean;
  heartCount: number;
  clearCount: number;
  courseId: number;
  size: "small" | "big";
  creator?: string;
  disabled: boolean;
}

const CourseItem = ({
  thumbnailUrl,
  courseLength,
  clearRuinsCount,
  courseDetail,
  courseName,
  eventId,
  tags,
  isHeart,
  isClear,
  heartCount,
  clearCount,
  courseId,
  size,
  creator,
  disabled,
}: CourseItemProps) => {
  const [isHearted, setIsHearted] = useState<boolean>(isHeart);
  const [isCleared, setIsCleared] = useState<boolean>(isClear);

  const navigate = useNavigate();

  const handleClickItem = () => {
    if (size === "small") {
      navigate(`/course/${courseId}`);
    }
  };

  return (
    <CourseItemContainer onClick={handleClickItem} $size={size}>
      <CourseThumbnail $url={thumbnailUrl}>
        {size === "small" && (
          <CourseProgressBar
            max={courseLength}
            value={clearRuinsCount}
            barColor={LegacySementic.green.netural}
            bgColor={LegacyPalette.fillNormal}
            width="84px"
          />
        )}
      </CourseThumbnail>
      <ContentWrapper $size={size}>
        <HeaderContainer $size={size}>
          {size === "big" && <p>{creator}</p>}
          <div>
            {courseName}
            {size === "small" && eventId && <div>이벤트 중!</div>}
          </div>
          <span>{courseDetail}</span>
        </HeaderContainer>
        <ToggleButtonContainer>
          <CourseToggleButton
            buttonType="heart"
            value={heartCount}
            isSelected={isHearted}
            setIsSelected={setIsHearted}
            courseId={courseId}
            disabled={disabled}
          />
          <CourseToggleButton
            buttonType="clear"
            value={clearCount}
            isSelected={isCleared}
            setIsSelected={setIsCleared}
            disabled={disabled}
          />
        </ToggleButtonContainer>
        <Tag data={tags} disabled />
      </ContentWrapper>
    </CourseItemContainer>
  );
};

export default CourseItem;

const CourseItemContainer = styled.div<{ $size: "small" | "big" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => ($size === "small" ? "8px" : "20px")};
`;

const CourseThumbnail = styled.div<{ $url: string }>`
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 144px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  border-radius: 12px;
`;

const HeaderContainer = styled.div<{ $size: "small" | "big" }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    ${({ $size }) =>
      $size === "small"
        ? LegacyTypography.Pretendard.Label.Regular
        : LegacyTypography.Pretendard.Headline.Medium};
    color: ${LegacyPalette.labelNeutral};
  }

  div {
    display: flex;
    gap: 4px;
    align-items: center;
    ${({ $size }) =>
      $size === "small"
        ? LegacyTypography.Pretendard.Headline.Bold
        : LegacyTypography.Pretendard.Title1.Bold};
    color: ${LegacyPalette.labelNormal};

    div {
      ${LegacyTypography.Pretendard.Caption2.Bold};
      color: ${LegacyPalette.labelNormal};
      background-color: ${LegacySementic.red.netural};
      padding: 2px 8px;
      border-radius: 999px;
    }
  }

  p {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ContentWrapper = styled.div<{ $size: "small" | "big" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $size }) => ($size === "small" ? "8px" : "12px")};
`;
