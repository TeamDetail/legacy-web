import CourseProgressBar from "@components/course/CourseProgressBar";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import styled from "styled-components";
import CourseElementItem from "./CourseElementItem";
import { RuinDetail } from "@src/types/map/ruin.type";

interface CourseElementListProps {
  courseLength: number;
  clearRuinsCount: number;
  courseId: number;
  ruins: RuinDetail[];
  clearRuins: RuinDetail[];
}

const CourseElementList = ({
  courseLength,
  clearRuinsCount,
  ruins,
  clearRuins,
}: CourseElementListProps) => {
  return (
    <CourseElementListContainer>
      <CourseProgressBar
        max={courseLength}
        value={clearRuinsCount}
        barColor={LegacySementic.green.netural}
        bgColor={LegacyPalette.fillNormal}
        width="100%"
      />
      <CourseElementItemContainer>
        {ruins?.map((item, idx) => {
          const isClear =
            clearRuins.some((clear) => clear.ruinsId === item.ruinsId) ?? false;

          return (
            <CourseElementItem
              key={item.ruinsId}
              index={idx}
              isClear={isClear}
              ruinId={item.ruinsId}
              ruinName={item.name}
              explorerCount={55}
              explorerRatio={12}
              ruinScore={10}
            />
          );
        })}
      </CourseElementItemContainer>
    </CourseElementListContainer>
  );
};

export default CourseElementList;

const CourseElementListContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  flex-grow: 1;
  overflow: hidden;
`;

const CourseElementItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 12px;
  overflow-y: scroll;
`;
