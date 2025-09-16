import AchievementItem from "@components/achievement/AchievementList/AchievementItemContainer/AchievementItem";
import { useGetAchievementQuery } from "@src/queries/achievement/achievement.queries";
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

  return type === "EXPLORE" ? (
    <ItemContainer>
      {exploreAchieveData?.data?.map((item) => (
        <AchievementItem
          key={item.achievementId}
          {...item}
          valueType="EXPLORE"
        />
      ))}
    </ItemContainer>
  ) : type === "LEVEL" ? (
    <ItemContainer>
      {levelAchieveData?.data?.map((item) => (
        <AchievementItem key={item.achievementId} {...item} valueType="LEVEL" />
      ))}
    </ItemContainer>
  ) : (
    <ItemContainer>
      {hiddenAchieveData?.data?.map((item) => (
        <AchievementItem
          key={item.achievementId}
          {...item}
          valueType="HIDDEN"
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