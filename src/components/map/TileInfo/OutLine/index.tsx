import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useRuin from "@src/hooks/map/useRuin";
import styled from "styled-components";

const OutLine = () => {
  const score = 4;
  const { ruinDetailDummy, ruinDetail } = useRuin();
  const card = ruinDetailDummy[0].cards[0];

  return (
    <>
      <RuinNameScoreContainer>
        <RuinNameContainer>
          <span># {ruinDetail ? ruinDetail.ruinsId : 100000000}</span>
          {ruinDetail?.name}
        </RuinNameContainer>
        <ScoreContainer $gap="2px">
          <StarRating score={score} />( 302 )
        </ScoreContainer>
      </RuinNameScoreContainer>
      <Card
        cardType={card!.cardType}
        cardId={card!.cardId}
        cardImageUrl={card!.cardImageUrl}
        cardName={card!.cardName}
        size="L"
        isAtv={false}
        canInteract={false}
        handleCardChange={() => {}}
      />
      <DetailContainer>
        <span>탐험 필요 크레딧</span>
        <CostText>
          33,000<span>( 오늘 누적 2블록 )</span>
        </CostText>
      </DetailContainer>
    </>
  );
};

export default OutLine;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 1;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

export const RuinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const ScoreContainer = styled.div<{ $gap: string }>`
  display: flex;
  gap: 2px;
  color: ${LegacyPalette.fillAlternative};
  ${LegacyTypography.Pretendard.Caption2.Medium}
`;

const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CostText = styled.div`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacySementic.yellow.netural};
  span {
    ${LegacyTypography.Pretendard.Body2.Medium}
    color: ${LegacyPalette.labelAlternative}
  }
`;
