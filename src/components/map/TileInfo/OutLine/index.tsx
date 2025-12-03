import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { RuinDetail } from "@src/types/map/ruin.type";
import * as S from "./style";
import NeedCredit from "@components/map/TileInfo/NeedCredit";
import { Suspense } from "react";

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
      cardType="BASIC_CARD"
      cardId={ruinDetail.card.cardId}
      cardImageUrl={ruinDetail.card.cardImageUrl}
      cardName={ruinDetail.card.cardName}
      size="L"
      isAtv={false}
      canInteract={false}
      handleCardChange={() => {}}
      nationAttributeName={ruinDetail.card.nationAttributeName}
      lineAttributeName={ruinDetail.card.lineAttributeName}
      regionAttributeName={ruinDetail.card.regionAttributeName}
    />
    <S.DetailContainer>
      <span>탐험 필요 크레딧</span>
      <Suspense fallback={<S.CostTextSkel />}>
        <NeedCredit />
      </Suspense>
    </S.DetailContainer>
  </>
);
export default OutLine;
