import useAchievementStore from '@src/store/useAchievementStore';
import * as S from './style';
import { achieveGoalMapper, achievementValueTypeMapper } from '@src/utils/textMapper/textMapper';
import Item from '@components/common/Item';
import AchievementImage from '../AchievementImage';
import LegacyButton from '@components/common/LegacyButton';
import { LegacySementic } from '@src/constants/color/color';
import RecordItem from '@components/profile/UserRecord/RecordItem';
import useUserStore from '@src/store/useUserStore';
import achievementApi from '@src/api/achievement/achievement.api';
import useModalStore from '@src/store/useModalStore';
import AchievementAwardModal from '@components/achievement/AchievementAwardModal';
import { ACHIEVE_BASE_AWARD } from '@src/constants/achievement/achievement.constants';

const AchievementDetail = () => {
  const {selectedAchievementData} = useAchievementStore();
  const {userStoreData} = useUserStore();
  const {setOpenModal, setCloseModal} = useModalStore();
  return (
    <S.AchievementSideContainer>
      <LegacyButton
        isBold
        isFilled={false}
        size="default"
        color={LegacySementic.yellow.netural}
        width="100%"
        handleClick={() =>
          achievementApi.getAchievementAward().then((data) => {
            console.log(data);
            setOpenModal({
              element: (
                <AchievementAwardModal close={setCloseModal} data={data} />
              ),
              key: "AWARD_MODAL",
            });
          })
        }
      >
        <S.AchieveAwardText>보상 일괄 수령</S.AchieveAwardText>
      </LegacyButton>
      {selectedAchievementData ? (
        <S.AchievementDetailContainer>
          <S.AchievementDetailHeader
            $valueType={selectedAchievementData.valueType}
          >
            <AchievementImage
              size="BIG"
              grade={selectedAchievementData.achievementGrade}
              iconType={selectedAchievementData.achievementType}
            />
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
                {Math.floor(selectedAchievementData.achieveUserPercent * 100) /
                  100}
                %
              </span>
            </div>
          </S.AchievementDetailMain>
          <S.AchievementDetailAwardContainer>
            보상
            <div>
              <div>
                <p>크레딧</p>
                <p>
                  {ACHIEVE_BASE_AWARD[selectedAchievementData.achievementGrade].credit}
                </p>
              </div>
              <div>
                <p>경험치</p>
                <p>
                  {ACHIEVE_BASE_AWARD[selectedAchievementData.achievementGrade].exp}
                </p>
              </div>
              {selectedAchievementData.achievementAward.map((item, idx) => (
                <div key={idx}>
                  <p>{item.itemName}</p>
                  <Item
                    size="normal"
                    itemType={item.itemType}
                    key={item.itemName + item.itemId}
                  />
                </div>
              ))}
            </div>
          </S.AchievementDetailAwardContainer>
        </S.AchievementDetailContainer>
      ) : (
        <S.AchievementRecord>
          기록
          <S.AchievementRecordLevel>
            <p>레벨</p>
            <span>{userStoreData.level}Lv</span>
          </S.AchievementRecordLevel>
          <RecordItem
            title="완수한 탐험 도전과제"
            value={userStoreData.record.experience.adventureAchieve}
            unit="개"
          />
          <RecordItem
            title="완수한 숙련 도전과제"
            value={userStoreData.record.experience.experienceAchieve}
            unit="개"
          />
          <RecordItem
            title="완수한 히든 도전과제"
            value={userStoreData.record.experience.hiddenAchieve}
            unit="개"
          />
        </S.AchievementRecord>
      )}
    </S.AchievementSideContainer>
  );
}

export default AchievementDetail