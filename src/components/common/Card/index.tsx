import { CardType } from "@src/types/card/card.type";
import CardTag from "../CardTag";
import * as S from "./style";
import ShineBadge from "@src/assets/cardBadge/ShineBadge.svg?react";
import StartBadge from "@src/assets/cardBadge/StartBadge.svg?react";

interface CardTypeProps {
  cardType: CardType;
  cardId?: number;
  nationAttributeName?: string;
  regionAttributeName?: string;
  lineAttributeName?: string;
  cardName?: string;
  cardImageUrl?: string;
  size?: "L" | "M" | "S";
  isAtv: boolean;
  handleCardChange: (cardId: number) => void;
  canInteract: boolean;
}

const Card = ({
  cardType,
  cardId,
  nationAttributeName = "국가",
  regionAttributeName = "지역",
  lineAttributeName = "계열",
  cardName,
  cardImageUrl,
  size = "S",
  isAtv,
  handleCardChange,
  canInteract,
}: CardTypeProps) => {
  const BadgeSize = size === "L" ? 40 : size === "M" ? 32 : 20;
  const isCardAtv = isAtv && canInteract;

  return (
    <S.CardWrap $isFocus={isCardAtv}>
      <S.CardContainer
        $size={size}
        $type={cardType}
        $imageUrl={cardImageUrl!}
        $isFocus={isCardAtv}
        key={cardId}
        onClick={() => handleCardChange(cardId!)}
      >
        <S.CardInfoContainer>
          <S.CardTagContainer>
            <CardTag text={nationAttributeName} type="NATION" size={size} />
            <CardTag text={lineAttributeName} type="LINE" size={size} />
            <CardTag text={regionAttributeName} type="REGION" size={size} />
          </S.CardTagContainer>
          {cardType === "SHINING_CARD" ? (
            <ShineBadge width={BadgeSize} height={BadgeSize}/>
          ) : cardType === "START_CARD" &&(
            <StartBadge width={BadgeSize} height={BadgeSize}/>
          )}
        </S.CardInfoContainer>
        <p>{cardName}</p>
      </S.CardContainer>
      <S.CardFocusMenu $isFocus={isCardAtv}>
        <S.CardButton $size={size} $type="ACCEPT">
          장착
        </S.CardButton>
        <S.CardButton $size={size} $type="CLOSE">
          취소
        </S.CardButton>
      </S.CardFocusMenu>
    </S.CardWrap>
  );
};

export default Card;
