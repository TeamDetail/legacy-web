type storeType = "REGION" | "NATION" | "LINE";

export interface Cardpack {
  cardpackName: string;
  cardpackContent: string;
  price: number;
  storeType: storeType;
  cardpackId: number;
}

export interface CardpackResponse {
  cardpack: Cardpack[];
  buyCount: number;
}
