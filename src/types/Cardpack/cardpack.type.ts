export interface CardPack {
  cardpackName: string;
  cardpackContent: string;
  price: number;
  storeType: "LINE" | "REGION" | "NATION";
  cardpackId: number;
}