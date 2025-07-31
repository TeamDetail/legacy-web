import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { RuinDetail } from "@src/types/map/ruin.type";
import * as S from "./style";
import { ruinDetailDummy } from "@src/constants/dummy/ruinDetail.dummy";

const OutLine = ({ ruinDetail }: { ruinDetail: RuinDetail }) => {
  const score = 4;
  const card = ruinDetailDummy[0].cards[0];

  return (
    <>
      <S.RuinNameScoreContainer>
        <S.RuinNameContainer>
          <span># {ruinDetail && ruinDetail.ruinsId}</span>
          {ruinDetail?.name}
        </S.RuinNameContainer>
        <S.ScoreContainer $gap="2px">
          <StarRating score={score} />( 302 )
        </S.ScoreContainer>
      </S.RuinNameScoreContainer>
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
      <S.DetailContainer>
        <span>탐험 필요 크레딧</span>
        <S.CostText>
          33,000<span>( 오늘 누적 2블록 )</span>
        </S.CostText>
      </S.DetailContainer>
    </>
  );
};

export default OutLine;
