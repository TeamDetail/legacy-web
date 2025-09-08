type storeType = "REGION" | "NATION" | "LINE";

export interface Cardpack {
  cardpackName: string;
  cardpackContent: string;
  price: number;
  storeType: storeType;
  cardpackId: number;
}
