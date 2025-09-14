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
export type AchievementType = CardAchievement | AdventureAchievementType | CourseAchievementType | QuizAchievementType | ShopAchievementType | TitleAcievementType
