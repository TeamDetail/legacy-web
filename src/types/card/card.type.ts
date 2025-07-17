export interface Card extends CardResponse {
  isAtv: boolean;
  size: "S" | "L" | "M";
}

export interface CardResponse {
  cardId: number;
  cardName: string;
  cardImageUrl: string;
  cardType: CardType;
  nationAttributeName: NationAttributeType;
  lineAttributeName: LineAttributeType;
  regionAttributeName: RegionAttributeType;
}

export interface CardCollection {
  maxCount: number,
  cards: CardResponse[],
}

export type LineAttributeType =
  | "역사"
  | "신앙"
  | "학문"
  | "의식주"
  | "놀이"
  | "상징"
  | "기술"
  | "체제";
export type NationAttributeType =
  | "대한민국"
  | "대한제국"
  | "조선"
  | "고려"
  | "통일신라"
  | "신라"
  | "고구려"
  | "백제";
export type RegionAttributeType =
  | "경기"
  | "강원"
  | "충북"
  | "충남"
  | "전북"
  | "전남"
  | "경북"
  | "경남"
  | "제주";
export type CardType =
  | "START_CARD"
  | "BASIC_CARD"
  | "SHINING_CARD"
  | "BLANK_CARD";