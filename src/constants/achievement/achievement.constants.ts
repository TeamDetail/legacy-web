import { AchievementGrade } from "@src/types/achievement/achievement.type"

export const ACHIEVE_BASE_AWARD: Record<
  AchievementGrade,
  { credit: number; exp: number }
> = {
  LEGENDARY: {
    exp: 500,
    credit: 500000,
  },
  EPIC: {
    exp: 250,
    credit: 50000,
  },
  UNIQUE: {
    exp: 150,
    credit: 10000,
  },
  CHALLENGE: {
    exp: 100,
    credit: 5000,
  },
  COMMON: {
    exp: 50,
    credit: 500,
  },
};