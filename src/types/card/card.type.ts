export interface Card {
  cardId: number;
  name: string;
  imageUrl: string;
  cardType: CardType;
  nationAttributeName: string;
  lineAttributeName: string;
  regionAttributeName: string;
  isAtv: boolean;
  size: "S" | "L" | "M";
}

export interface CardResponse {
  cardId: number;
  name: string;
  imageUrl: string;
  cardType: CardType;
  nationAttributeName: string;
  lineAttributeName: string;
  regionAttributeName: string;
}

export type CardType = "START_CARD" | "BASIC_CARD" | "SHINING_CARD" | "BLANK_CARD";