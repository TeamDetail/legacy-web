import { TrialState } from "@src/types/trial/trial.type"
import * as S from './style'
import { formatNumberWithCommas } from "@src/utils/format/formatNumberWithCommas";
import { USER_STATS, USER_STATS_COLOR, USER_STATS_COUNTER, USER_STATS_OBJECT } from "@src/constants/trial/stats";
import LegacyButton from "@components/common/LegacyButton";
import { LegacySementic } from "@src/constants/color/color";
interface TrialStatusBarProps {
  isLoading: boolean;
  changePage: () => void;
  trialData: TrialState;
}

const TrialStatusBar = ({
  trialData,
  isLoading,
  changePage
}: TrialStatusBarProps) => {
  return (
    <S.TrialStatusBar
      $isLoading={isLoading.toString()}
    >
      <S.TrialStatusMain>
        <S.TrialFloorStatus>
          <div>{trialData.score.floor}층</div>
        </S.TrialFloorStatus>

        <S.TrialScoreStatus>
          <p>시련의 층</p>
          <S.TrialStatusMiniMenu $color={LegacySementic.purple.normal}>
            목표 점수
            <p>10,000,000</p>
          </S.TrialStatusMiniMenu>
        </S.TrialScoreStatus>

        <S.TrialScoreStatus>
          <S.TrialStatusMiniMenu $color={LegacySementic.yellow.netural}>
            문명 코인
            <p>{formatNumberWithCommas(trialData.score.coin)}</p>
          </S.TrialStatusMiniMenu>
        </S.TrialScoreStatus>
        
        <S.TrialStatContainer>
          {USER_STATS.map((item) => (
          <div key={item}>
            <p>{USER_STATS_OBJECT[item]}</p>
            <S.TrialStat $color={USER_STATS_COLOR[item]}>
              {trialData.stats[item] + USER_STATS_COUNTER[item]}
            </S.TrialStat>
          </div>
          ))}
        </S.TrialStatContainer>
      </S.TrialStatusMain>

      <S.TrialStatusFooter>
        <LegacyButton
          size='big'
          isBold={true}
          isFilled={false}
          color={LegacySementic.yellow.netural}
          width='100%'
        >
          <p style={{color:`${LegacySementic.yellow.netural}`}}>
            인벤토리
          </p>
        </LegacyButton>
        <LegacyButton
          size='big'
          isBold={true}
          isFilled={false}
          color={LegacySementic.red.normal}
          handleClick={changePage}
          width='100%'
        >
          <p style={{color:`${LegacySementic.red.normal}`}}>
            나가기
          </p>
        </LegacyButton>
      </S.TrialStatusFooter>
    </S.TrialStatusBar>
  )
}

export default TrialStatusBar