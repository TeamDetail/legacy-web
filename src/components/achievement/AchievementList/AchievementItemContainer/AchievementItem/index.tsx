import { Achievement, AchievementValueType } from '@src/types/achievement/achievement.type';
import * as S from './style';
import { achieveGoalMapper, achievementValueTypeMapper } from '@src/utils/textMapper/textMapper';

const AchievementItem = ({
  achievementName,
  achievementContent,
  achieveUserPercent,
  achievementType,
  currentRate,
  goalRate,
  isReceive,
  valueType,
  onClick
}: Achievement & { valueType: AchievementValueType, onClick?: () => void }) => {
  return (
    <S.AchievementHover onClick={onClick}>
      <S.AchievementItemContainer>
        <S.AchievementImg />
        <S.AchievementContents>
          <S.AchievementHeader $valueType={valueType}>
            <div>
              <p>{achievementName}</p>
              <span>#{achievementValueTypeMapper[valueType]}</span>
            </div>
            <p>{achievementContent}</p>
          </S.AchievementHeader>
          <S.AchievementMoreInfoContainer>
            <S.AchievementMoreInfo>
              <p>목표</p>
              <span>{achieveGoalMapper(achievementType, goalRate)}</span>
            </S.AchievementMoreInfo>
            <S.AchievementMoreInfo>
              <p>상태</p>
              <S.AchievementRate
                $goal={
                  (goalRate <= currentRate).toString() as "true" | "false"
                }
                $valueType={valueType}
              >
                {isReceive ? "보상 수령 완료" : `${currentRate} / ${goalRate}`}
              </S.AchievementRate>
            </S.AchievementMoreInfo>
            <S.AchievementMoreInfo>
              <p>달성자 비율</p>
              <span>{achieveUserPercent}%</span>
            </S.AchievementMoreInfo>
          </S.AchievementMoreInfoContainer>
        </S.AchievementContents>
      </S.AchievementItemContainer>
    </S.AchievementHover>
  );
}

export default AchievementItem