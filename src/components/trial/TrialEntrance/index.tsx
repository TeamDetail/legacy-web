import { useState } from 'react';
import * as S from './style';
import { TrialState } from '@src/types/trial/trial.type';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import LegacyButton from '@components/common/LegacyButton';

const TrialEntrance = () => {
  const [trialData, setTrialData] = useState<TrialState>({
		"seed" : "0DP1XMDE", // 8자리 숫자 알파벳 대문자 조합
		"deck" : [
			{
			  "cardId" : 1,
			  "name" : "카드 이름1",
	      "imageUrl" : "https://shiftpsh-blog.s3.amazonaws.com/uploads/2022/04/listing216.png",
	      "cardType" : "SHINING_CARD",
	      "nationAttributeName" : "국가1",
	      "lineAttributeName" : "개열2",
	      "regionAttributeName" : "지역3"
		  },
		  {
			  "cardId" : 2,
			  "name" : "카드 이름2",
	      "imageUrl" : "https://shiftpsh-blog.s3.amazonaws.com/uploads/2022/04/listing216.png",
	      "cardType" : "START_CARD",
	      "nationAttributeName" : "국가2",
	      "lineAttributeName" : "개열2",
	      "regionAttributeName" : "지역2"
		  },
		  {
			  "cardId" : 3,
			  "name" : "카드 이름3",
	      "imageUrl" : "https://shiftpsh-blog.s3.amazonaws.com/uploads/2022/04/listing216.png",
	      "cardType" : "START_CARD",
	      "nationAttributeName" : "국가3",
	      "lineAttributeName" : "개열3",
	      "regionAttributeName" : "지역3"
		  }
		],
		"token" : [
			{
			  "tokenId": 1,
				"tokenName": "문명토큰",
				"tokenYear": 666,
			}
		],
		score: {
	    floor: 2, // 현재 층
	    coin: 100000, // 문명 코인
	    playedCard: 20, // 이번 런에서 플레이한 총 카드 수
	    droppedCard: 10, // 이번 런에서 카드 버리기 횟수
	    maxScore: 10330, // 이번 런 최고 점수
	    buyCount: 0, // 이번 런에서 구매한 아이템 수
	    restockTime: 2, // 이번 런의 상점 리롤 횟수
	  },
		"stats" : {
	    "snowflakeCapacity": 3,
	    "forcedRestock": 1,
	    "creditRecovery" : 10,
	    "dropCount" : 5,
    }
	});

  return (
    <S.TrialEntanceContainer>
      <S.TrialFloorContainer>
        {Array.from({length: 12}).map((_, index) => (
          <S.TrialFloorItem
            $color={
              (index+trialData.score.floor-7 === trialData.score.floor)
              ? LegacyPalette.primaryNormal
              : (index+trialData.score.floor-7) % 10 === 0
                ? LegacySementic.red.normal
                : ((index+trialData.score.floor-7) % 3 === 0)
                  ? LegacySementic.green.normal
                  : LegacyPalette.labelNormal
            }
            $currentFloor={trialData.score.floor}
            $itemFloor={(index+trialData.score.floor-7)}
          >
            <p>{index+trialData.score.floor-7 <= 0 || index+trialData.score.floor-7}</p>
          </S.TrialFloorItem>
        ))}
        <S.TrialShadow/>
      </S.TrialFloorContainer>
      <S.TrialController>
        {trialData.score.floor > 1 ? (
          <S.TrialCurrentFloor>
            현재<span>{trialData.score.floor}</span>층 도전 중!
          </S.TrialCurrentFloor>
        ) : (
          <S.TrialCurrentFloor>
            <span>시련</span>에 도전하시겠습니까?
          </S.TrialCurrentFloor>
        )}
        <LegacyButton
          size='big'
          isBold
          isFilled
          color={LegacyPalette.primaryNormal}
          width='100%'
        >
          <S.TrialButtonText
            $color={LegacyPalette.labelNormal}
          >
            도전하기!
          </S.TrialButtonText>
        </LegacyButton>
        {trialData.score.floor > 1 && (
          <>
            <LegacyButton
              size='big'
              isBold
              isFilled={false}
              color={LegacySementic.yellow.netural}
              width='100%'
            >
              <S.TrialButtonText
                $color={LegacySementic.yellow.netural}
              >
                런 정보
              </S.TrialButtonText>
            </LegacyButton>
            <LegacyButton
              size='big'
              isBold
              isFilled={false}
              color={LegacySementic.red.normal}
              width='100%'
            >
              <S.TrialButtonText
                $color={LegacySementic.red.normal}
              >
                시련 포기하기
              </S.TrialButtonText>
            </LegacyButton>
          </>
        )}
      </S.TrialController>
    </S.TrialEntanceContainer>
  )
}

export default TrialEntrance