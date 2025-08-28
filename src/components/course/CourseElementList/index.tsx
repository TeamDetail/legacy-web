import CourseProgressBar from "@components/course/CourseProgressBar";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import styled from "styled-components";
import CourseElementItem from "../CourseElementItem";
import { RuinDetail } from "@src/types/map/ruin.type";
import { Dispatch, SetStateAction } from "react";
import { LegacyTypography } from "@src/constants/font/fontToken";

interface CourseElementListProps {
  courseLength?: number;
  clearRuinsCount?: number;
  ruins: RuinDetail[];
  clearRuins: RuinDetail[];
  create: boolean;
  setRuins?: Dispatch<SetStateAction<RuinDetail[]>>;
}

const CourseElementList = ({
  courseLength,
  clearRuinsCount,
  ruins,
  clearRuins,
  create,
  setRuins,
}: CourseElementListProps) => {
  return (
    <CourseElementListContainer>
      {!create && (
        <CourseProgressBar
          max={courseLength}
          value={clearRuinsCount!}
          barColor={LegacySementic.green.netural}
          bgColor={LegacyPalette.fillNormal}
          width="100%"
        />
      )}
      {ruins.length !== 0 ? (
        <CourseElementItemContainer>
          {ruins?.map((item, idx) => {
            const isClear =
              clearRuins.some((clear) => clear.ruinsId === item.ruinsId) ??
              false;

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
                handleClick={() => create && setRuins && setRuins(prev =>
                      prev.filter(ruin => ruin.ruinsId !== item.ruinsId))
                }
                card={item.card}
              />
            );
          })}
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
