import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { Card as CardType } from "@src/types/card/card.type";
import * as S from "./style";
import { cardDummy } from "@src/constants/dummy/course.dummy";

interface ElementItemProps {
  index: number;
  isClear: boolean;
  ruinId: number;
  ruinName: string;
  card?: CardType;
  ruinScore: number;
  explorerCount: number;
  explorerRatio: number;
  commentsCount?: number;
}

const CourseElementItem = ({
  index,
  isClear,
  ruinId,
  ruinName,
  card = cardDummy,
  ruinScore,
  explorerCount,
  explorerRatio,
  commentsCount = 0,
}: ElementItemProps) => {
  return (
    <S.ElementItemContainer>
      <S.IndexBox $isClear={isClear}>{index + 1}</S.IndexBox>
      <S.InfoContainer>
        <S.RuinNameScoreContainer>
          <S.RuinNameContainer>
            <span># {ruinId}</span>
            {ruinName}
          </S.RuinNameContainer>
          <S.ScoreContainer $gap="2px">
            <StarRating score={ruinScore} />( {commentsCount} )
          </S.ScoreContainer>
        </S.RuinNameScoreContainer>
        <S.Line />
        <S.ExplorerContainer>
          <S.DetailItem>
            <span>탐험자 수</span>
            {explorerCount}명
          </S.DetailItem>
          <S.DetailItem>
            <span>획득 비율</span>
            <S.RatioText>{explorerRatio}%</S.RatioText>
          </S.DetailItem>
        </S.ExplorerContainer>
      </S.InfoContainer>
      <Card
        cardType={card.cardType}
        cardId={card.cardId}
        cardImageUrl={card.cardImageUrl}
        cardName={card.cardName}
        size="S"
        isAtv={false}
        canInteract={false}
        handleCardChange={() => {}}
      />
    </S.ElementItemContainer>
  );
};

export default CourseElementItem;
