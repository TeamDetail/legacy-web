import Card from "@components/common/Card";
import * as S from "./style";
import { RuinDetail } from "@src/types/map/ruin.type";

const Detail = ({ ruinDetail }: { ruinDetail: RuinDetail }) => {
  return (
    <S.DetailLayout>
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
      <S.ExplainContainer>
        <span>설명</span>
        국군은 국가의 안전보장과 국토방위의 신성한 의무를 수행함을 사명으로
        하며, 그 정치적 중립성은 준수된다.
      </S.ExplainContainer>
      <S.ExplorerContainer>
        <S.DetailItem>
          <span>탐험자 수</span>
          23명
        </S.DetailItem>
        <S.DetailItem>
          <span>획득 비율</span>
          <S.RatioText>
            <span>전체 중 </span>
            3%
          </S.RatioText>
        </S.DetailItem>
      </S.ExplorerContainer>
    </S.DetailLayout>
  );
};

export default Detail;
