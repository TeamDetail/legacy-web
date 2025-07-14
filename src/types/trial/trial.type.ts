import { CardResponse } from "../card/card.type";

export interface TrialStateRequest {
  seed: string;
  deck: number[];
  token: number[];
  score: TrialScore;
  stats: Stats;
}

export interface TrialState {
  seed: string; // 8자리 숫자 알파벳 대문자 조합
  deck: CardResponse[];
  token: TrialToken[];
  score: TrialScore;
  stats: Stats;
}

export interface TrialScore {
  floor: number; // 현재 층
  coin: number; // 문명 코인
  playedCard: number; // 이번 런에서 플레이한 총 카드 수
  droppedCard: number; // 이번 런에서 카드 버리기 횟수
  maxScore: number; // 이번 런 최고 점수
  buyCount: number; // 이번 런에서 구매한 아이템 수
  restockTime: number; // 이번 런의 상점 리롤 횟수
}

export interface TrialToken {
  tokenId: number;
  tokenName: string;
  tokenYear: number;
}

export interface Stats {
  snowflakeCapacity: number;
  forcedRestock: number;
  creditRecovery: number;
  dropCount: number;
}