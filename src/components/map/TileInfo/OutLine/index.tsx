import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { RuinDetail } from "@src/types/map/ruin.type";
import * as S from "./style";

const OutLine = ({ ruinDetail }: { ruinDetail: RuinDetail }) => (
  <>
    <S.RuinNameScoreContainer>
      <S.RuinNameContainer>
        <span># {ruinDetail && ruinDetail.ruinsId}</span>
        {ruinDetail?.name}
      </S.RuinNameContainer>
      {ruinDetail.averageRating !== 0 && (
        <S.ScoreContainer $gap="2px">
          <StarRating score={ruinDetail.averageRating} />({" "}
          {ruinDetail.countComments} )
        </S.ScoreContainer>
      )}
    </S.RuinNameScoreContainer>
    <Card
      cardType={ruinDetail.card.cardType}
      cardId={ruinDetail.card.cardId}
      cardImageUrl={ruinDetail.card.cardImageUrl}
      cardName={ruinDetail.card.cardName}
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
export default OutLine;
