import { Item } from "@src/types/inventory/inventory.type";

export type Achievement = {
  achievementId: number;
  achievementName: string;
  achievementContent: string;
  achievementAward: Item[];
  achieveUserPercent: number;
  isReceive: boolean;
  currentRate: number;
  goalRate: number; // 항상 1 이상의 수가 보장됩니다.
  grade: AchievementGrade;
};

export type AchievementGrade = "LEGENDARY" | "EPIC" | "UNIQUE" | "RARE" | "COMMON"