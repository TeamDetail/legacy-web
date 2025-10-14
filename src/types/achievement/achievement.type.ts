import { ItemType } from "@src/types/inventory/inventory.type";

export type CardAchievement =
  | "CARD"
  | "SHINING_CARD"
  | "CARD_PACK"
  | "STATED_CARD";
export type AdventureAchievementType = "RUINS" | "BLOCKS";
export type CourseAchievementType = "CLEAR_COURSE" | "MAKE_COURSE" | "STATE_COURSE";
export type QuizAchievementType = "SOLVE_QUIZ" | "WRONG_QUIZ";
export type ShopAchievementType = "BUY_ITEM";
export type TitleAcievementType = "TITLE";
export type AchievementType = CardAchievement | AdventureAchievementType | CourseAchievementType | QuizAchievementType | ShopAchievementType | TitleAcievementType | "LEVEL"

export type AchievementValueType = "EXPLORE" | "LEVEL" | "HIDDEN";

export type Achievement = {
  achievementId: number;
  achievementName: string;
  achievementContent: string;
  achievementAward: ItemType[];
  achieveUserPercent: number;
  achievementType: AchievementType;
  isReceive: boolean;
  currentRate: number;
  goalRate: number; // 항상 1 이상의 수가 보장됩니다.
  grade: AchievementGrade;
};

export type AchievementGrade =
  | "LEGENDARY"
  | "EPIC"
  | "UNIQUE"
  | "CHALLENGE"
  | "COMMON";