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
  grade,
  valueType
}: Achievement & { valueType: AchievementValueType }) => {
  return (
    <S.AchievementHover>
      <S.AchievementItemContainer>
        <S.AchievementImg src="" alt="achieveImg" />
        <S.AchievementContents>
          <S.AchievementHeader>
            <div>
              <p>{achievementName}</p>
              <span>#{achievementValueTypeMapper[valueType]}</span>
            </div>
            <p>{achievementContent}</p>
          </S.AchievementHeader>
          <div style={{ display: "flex", gap: "8px" }}>
            <S.AchievementMoreInfo>
              <p>목표</p>
              <span>{achieveGoalMapper(achievementType, goalRate)}</span>
            </S.AchievementMoreInfo>
            <S.AchievementMoreInfo>
              <p>상태</p>
              <S.AchievementRate
                $goal={(goalRate === currentRate).toString() as "true" | "false"}
                $valueType={valueType}
              >
                {goalRate} / {currentRate}
              </S.AchievementRate>
            </S.AchievementMoreInfo>
            <S.AchievementMoreInfo>
              <p>달성자 비율</p>
              <span>{achieveUserPercent}%</span>
            </S.AchievementMoreInfo>
          </div>
        </S.AchievementContents>
      </S.AchievementItemContainer>
    </S.AchievementHover>
  );
}

export default AchievementItem