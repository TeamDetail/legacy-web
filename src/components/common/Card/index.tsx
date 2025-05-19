import * as S from "./style";

interface CardType {
  cardType: "START" | "NORMAL" | "SHINE" | "BLANK";
  cardId?: number;
  nationAttributeId?: number;
  regionAttributeId?: number;
  lineAttributeId?: number;
  cardName?: string;
  cardImageUrl?: string;
  size?: "L" | "M" | "S";
}

const Card = ({
  cardType,
  cardId,
  nationAttributeId,
  regionAttributeId,
  lineAttributeId,
  cardName,
  cardImageUrl,
  size = "S"
}: CardType) => {

  return (
    <S.CardContainer $size={size} $type={cardType}>

    </S.CardContainer>
  );
};

export default Card;
