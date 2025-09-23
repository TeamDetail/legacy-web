import useAchievementStore from '@src/store/useAchievementStore';
import * as S from './style';
import { achieveGoalMapper, achievementValueTypeMapper } from '@src/utils/textMapper/textMapper';

const AchievementDetail = () => {
  const {selectedAchievementData} = useAchievementStore();
  return selectedAchievementData ? (
    <S.AchievementDetailContainer>
      <S.AchievementDetailHeader $valueType={selectedAchievementData.valueType}>
        {/* <img src={selectedAchievementData.achievementType} alt="achieveImg" /> */}
        <section></section>
        <div>
          <p>{selectedAchievementData.achievementName}</p>
          <span>
            #{achievementValueTypeMapper[selectedAchievementData.valueType]}
          </span>
        </div>
        <p>{selectedAchievementData.achievementContent}</p>
      </S.AchievementDetailHeader>
      <S.AchievementDetailMain>
        <div>
          <p>목표</p>
          <span>
            {achieveGoalMapper(
              selectedAchievementData.achievementType,
              selectedAchievementData.goalRate
            )}
          </span>
        </div>
        <div>
          <p>상태</p>
          <S.AchievementRate
            $goal={
              (
                selectedAchievementData.goalRate <=
                selectedAchievementData.currentRate
              ).toString() as "true" | "false"
            }
            $valueType={selectedAchievementData.valueType}
          >
            {selectedAchievementData.isReceive
              ? "보상 수령 완료"
              : `${selectedAchievementData.currentRate} / ${selectedAchievementData.goalRate}`}
          </S.AchievementRate>
        </div>
        <div>
          <p>달성자 비율</p>
          <span>
            {selectedAchievementData.achieveUserPercent}%
          </span>
        </div>
      </S.AchievementDetailMain>
      <S.AchievementDetailAwardContainer>
        보상
      </S.AchievementDetailAwardContainer>
    </S.AchievementDetailContainer>
  ) : (
    <></>
  );
}

export default AchievementDetail