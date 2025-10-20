import Card from "@components/common/Card";
import StarRating from "@components/common/StarRating";
import { CardResponse } from "@src/types/card/card.type";
import * as S from "./style";

interface ElementItemProps {
  index: number;
  isClear?: boolean;
  ruinId: number;
  ruinName: string;
  card?: CardResponse;
  ruinScore: number;
  explorerCount: number;
  explorerRatio: number;
  commentsCount: number;
  canSelect?: boolean;
  isSelect?: boolean;
  handleClick?: () => void;
}

const CourseElementItem = ({
  index,
  isClear,
  ruinId,
  ruinName,
  card,
  ruinScore,
  explorerCount,
  explorerRatio,
  commentsCount,
  canSelect = false,
  isSelect,
  handleClick,
}: ElementItemProps) => {
  return (
    <S.ElementItemContainer onClick={handleClick}>
      {canSelect ? (
        <S.SelectBox $isSelect={isSelect}>{isSelect && index + 1}</S.SelectBox>
      ) : (
        <S.IndexBox $isClear={isClear!}>{index + 1}</S.IndexBox>
      )}

      <S.InfoContainer>
        <S.RuinNameScoreContainer>
          <S.RuinNameContainer>
            <span># {ruinId}</span>
            {ruinName}
          </S.RuinNameContainer>
          {ruinScore !== 0 && (
            <S.ScoreContainer $gap="2px">
              <StarRating score={ruinScore} />( {commentsCount} )
            </S.ScoreContainer>
          )}
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
        cardType="BASIC_CARD"
        cardId={card!.cardId}
        cardImageUrl={card!.cardImageUrl}
        cardName={card!.cardName}
        size="S"
        isAtv={false}
        canInteract={false}
        handleCardChange={() => {}}
      />
    </S.ElementItemContainer>
  );
};

export default CourseElementItem;
