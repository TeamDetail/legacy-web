import Card from "@components/common/Card";
import * as S from "./style";
import { ruinDetailDummy } from "@src/constants/dummy/ruinDetail.dummy";

const Detail = () => {
  const firstRuinDetail = ruinDetailDummy[0];
  const card = firstRuinDetail.cards[0];

  return (
    <S.DetailLayout>
      <Card
        cardType={card.cardType}
        cardId={card.cardId}
        cardImageUrl={card.cardImageUrl}
        cardName={card.cardName}
        size="L"
        isAtv={false}
        canInteract={false}
        handleCardChange={() => {}}
      />
      <S.ExplainContainer>
        <span>설명</span>
        {firstRuinDetail.detail}
      </S.ExplainContainer>
      <S.ExplorerContainer>
        <S.DetailItem>
          <span>탐험자 수</span>
          {firstRuinDetail.explorerCount}명
        </S.DetailItem>
        <S.DetailItem>
          <span>획득 비율</span>
          <S.RatioText>
            <span>전체 중 </span>
            {firstRuinDetail.explorerRatio}%
          </S.RatioText>
        </S.DetailItem>
      </S.ExplorerContainer>
    </S.DetailLayout>
  );
};

export default Detail;
