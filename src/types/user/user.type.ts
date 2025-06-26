export interface User {
  nickname: string;
  level: number;
  exp: number;
  credit?: number;
  stats?: UserStats;
  allBlocks: number;
  ruinsBlocks: number;
  maxFloor: number;
  maxScore: number;
  imageUrl: string;
  title: Title;
}

export interface BaseDataResponse<T> {
  data: T;
}

export interface UserStats {
  snowflakeCapacity: number;
  storeRestock: number;
  creditCollect: number;
  dropCount: number;
}

export interface Title {
  name: string;
  content: string;
  styleId: number;
}
