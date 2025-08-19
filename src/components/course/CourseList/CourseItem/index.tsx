import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import CourseProgressBar from "./CourseProgressBar";

interface CourseItemProps {
  thumbnailUrl: string;
  courseLength: number;
  clearRuinsCount: number;
  courseDetail: string;
  courseName: string;
  eventId: number | null;
  tags: string[];
}

const CourseItem = ({
  thumbnailUrl,
  courseLength,
  clearRuinsCount,
  courseDetail,
  courseName,
  eventId,
  tags,
}: CourseItemProps) => {
  return (
    <CourseItemContainer>
      <CourseThumbnail $url={thumbnailUrl}>
        <CourseProgressBar
          max={courseLength}
          value={clearRuinsCount}
          barColor={LegacySementic.green.netural}
          bgColor={LegacyPalette.fillNormal}
        />
      </CourseThumbnail>
      <HeaderContainer>
        <div>
          {courseName}
          {eventId && <div>이벤트 중!</div>}
        </div>
        <span>{courseDetail}</span>
      </HeaderContainer>
      <TagContainer>
        {tags.map((tag) => (
          <div>#{tag}</div>
        ))}
      </TagContainer>
    </CourseItemContainer>
  );
};

export default CourseItem;

const CourseItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    ${LegacyTypography.Pretendard.Label.Regular};
    color: ${LegacyPalette.labelNeutral};
  }

  div {
    display: flex;
    gap: 4px;
    align-items: center;
    ${LegacyTypography.Pretendard.Headline.Bold};
    color: ${LegacyPalette.labelNormal};

    div {
      ${LegacyTypography.Pretendard.Caption2.Bold};
      color: ${LegacyPalette.labelNormal};
      background-color: ${LegacySementic.red.netural};
      padding: 2px 8px;
      border-radius: 999px;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;

  div {
    ${LegacyTypography.Pretendard.Label.Medium};
    color: ${LegacyPalette.labelNeutral};
    padding: 4px 8px;
    background-color: ${LegacyPalette.fillNormal};
  }
`;
