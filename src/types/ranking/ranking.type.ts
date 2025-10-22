import { TitleType } from "@src/types/user/user.type";

export interface BaseRankingType {
  nickname: string
  level: number;
  imageUrl: string;
  title: TitleType;
}

export interface TrialRankingType extends BaseRankingType {
  maxFloor: number;
  maxScore: number;
}

export interface LevelRankingType extends BaseRankingType {
  exp: number;
}

export interface ExploreRankingType extends BaseRankingType {
  allBlocks: number,
}