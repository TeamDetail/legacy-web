import { Achievement, AchievementValueType } from '@src/types/achievement/achievement.type';
import * as S from './style';
import { achieveGoalMapper, achievementValueTypeMapper } from '@src/utils/textMapper/textMapper';
import AchievementImage from '@components/achievement/AchievementImage';

const AchievementItem = ({
  achievementName,
  achievementContent,
  achieveUserPercent,
  achievementType,
  achievementGrade,
  currentRate,
  goalRate,
  isReceive,
  valueType,
  onClick
}: Achievement & { valueType: AchievementValueType, onClick?: () => void }) => {
  return (
    <S.AchievementHover onClick={onClick}>
      <S.AchievementItemContainer>
        <AchievementImage size="NORMAL" iconType={achievementType} grade={achievementGrade} />
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
              <span>{valueType === "HIDDEN" ? "???" : achieveGoalMapper(achievementType, goalRate)}</span>
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
              <span>{Math.floor(achieveUserPercent * 100)/100}%</span>
            </S.AchievementMoreInfo>
          </S.AchievementMoreInfoContainer>
        </S.AchievementContents>
      </S.AchievementItemContainer>
    </S.AchievementHover>
  );
}

export default AchievementItem