import CourseProgressBar from "@components/course/CourseProgressBar";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import styled from "styled-components";
import CourseElementItem from "../CourseElementItem";
import { RuinDetail } from "@src/types/map/ruin.type";
import { Dispatch, SetStateAction } from "react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { CourseElementRuin } from "@src/types/course/course.type";

interface CourseElementListProps {
  courseLength?: number;
  clearRuinsCount?: number;
  ruins: CourseElementRuin[];
  create: boolean;
  setRuins?: Dispatch<SetStateAction<RuinDetail[]>>;
}

const CourseElementList = ({
  courseLength,
  clearRuinsCount,
  ruins,
  create,
  setRuins,
}: CourseElementListProps) => {
  return (
    <CourseElementListContainer>
      {!create && (
        <CourseProgressBar
          max={courseLength}
          value={clearRuinsCount!}
          barColor={LegacySementic.blue.netural}
          bgColor={LegacyPalette.fillNormal}
          width="100%"
        />
      )}
      {ruins.length !== 0 ? (
        <CourseElementItemContainer>
          {ruins?.map((item, idx) => (
            <CourseElementItem
              key={item.data.ruinsId}
              index={idx}
              isClear={item.clear}
              ruinId={item.data.ruinsId}
              ruinName={item.data.name}
              explorerCount={55}
              explorerRatio={12}
              ruinScore={item.data.averageRating}
              commentsCount={item.data.countComments}
              handleClick={() =>
                create &&
                setRuins &&
                setRuins((prev) =>
                  prev.filter((ruin) => ruin.ruinsId !== item.data.ruinsId)
                )
              }
              card={item.data.card}
            />
          ))}
        </CourseElementItemContainer>
      ) : (
        <EmptySelectedRuinsContainer>
          검색해서 유적지를 선택해주세요!
        </EmptySelectedRuinsContainer>
      )}
    </CourseElementListContainer>
  );
};

export default CourseElementList;

const CourseElementListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${LegacyPalette.backgroundNormal};
  flex-grow: 1;
  overflow: hidden;
  border-radius: 20px;
  padding: 12px;
`;

const CourseElementItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 12px;
  overflow-y: scroll;
`;

const EmptySelectedRuinsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;
