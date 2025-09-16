import AchievementItem from "@components/achievement/AchievementList/AchievementItemContainer/AchievementItem";
import { useGetAchievementQuery } from "@src/queries/achievement/achievement.queries";
import useAchievementStore from "@src/store/useAchievementStore";
import { AchievementValueType } from "@src/types/achievement/achievement.type"
import styled from "styled-components";

type AchievementItemContainerProps = {
  type: AchievementValueType;
}
const AchievementItemContainer = ({
  type,
}: AchievementItemContainerProps) => {
  const { data: exploreAchieveData } = useGetAchievementQuery('EXPLORE');
  const { data: hiddenAchieveData } = useGetAchievementQuery('HIDDEN');
  const { data: levelAchieveData } = useGetAchievementQuery('LEVEL');
  const { selectAchievement } = useAchievementStore();

  return type === "EXPLORE" ? (
    <ItemContainer>
      {exploreAchieveData?.data?.map((item) => (
        <AchievementItem
          key={item.achievementId}
          {...item}
          valueType="EXPLORE"
          onClick={() => selectAchievement({ ...item, valueType: "EXPLORE" })}
        />
      ))}
    </ItemContainer>
  ) : type === "LEVEL" ? (
    <ItemContainer>
      {levelAchieveData?.data?.map((item) => (
        <AchievementItem
          key={item.achievementId}
          {...item}
          valueType="LEVEL"
          onClick={() => selectAchievement({ ...item, valueType: "LEVEL" })}
        />
      ))}
    </ItemContainer>
  ) : (
    <ItemContainer>
      {hiddenAchieveData?.data?.map((item) => (
        <AchievementItem
          key={item.achievementId}
          {...item}
          valueType="HIDDEN"
          onClick={() => selectAchievement({ ...item, valueType: "HIDDEN" })}
        />
      ))}
    </ItemContainer>
  );
}

export default AchievementItemContainer

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  height: 100%;
  overflow-y: scroll;
`