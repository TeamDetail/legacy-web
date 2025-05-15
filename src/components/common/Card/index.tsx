import * as S from "./style";

interface CardType {
  cardId: number;
  nationAttributeId: number;
  regionAttributeId: number;
  lineAttributeId: number;
  cardName: string;
  cardImageUrl: string;
  cardType: "START" | "NORMAL" | "SHINE";
  size?: "L" | "M" | "S";
}

const Card = ({
  cardId,
  nationAttributeId,
  regionAttributeId,
  lineAttributeId,
  cardName,
  cardImageUrl,
  cardType,
  size = "S"
}: CardType) => {

  return (
    <div>
      Card
    </div>
  );
};

export default Card;
