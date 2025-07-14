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
  // record: UserRecord;
  imageUrl: string;
  title: Title;
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

// export interface UserRecord {
//   allBlocks: number;
//   ruinsBlocks: number;
//   maxFloor: number;
//   maxScore: number;
//   cardCount: number;
//   shiningCardCount: number;
// }