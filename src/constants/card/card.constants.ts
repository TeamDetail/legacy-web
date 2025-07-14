import { LineAttributeType, NationAttributeType, RegionAttributeType } from "@src/types/card/card.type";

export const CARD_TRAITS: Record<'region'| 'nation' | 'line', RegionAttributeType[] | NationAttributeType[] | LineAttributeType[]> = {
  region: ["경기", "경북", "경남", "전북", "전남", "강원", "충북", "충남", "제주"],
  nation: ["대한민국", "대한제국", "조선", "고려", "통일신라", "신라", "고구려", "백제"],
  line: ["역사", "신앙", "학문", "의식주", "놀이", "상징", "기술", "체제"]
}