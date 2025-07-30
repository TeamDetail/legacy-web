import { CardResponse } from "@src/types/card/card.type";
import { CardPack } from "@src/types/Cardpack/cardpack.type";
import { Title } from "@src/types/user/user.type";

export type AchievementType =
  | "daliy"
  | "level"
  | "explore"
  | "trial"
  | "hidden";

export interface Achievement {
  courseId: number;
  name: string;
  thumbnail: string;
  creator: string;
  tag: string[];
  description: string;
  heartCount: number;
  clearCount: number;
  clearRuinsCount: number;
  isEventCourse: boolean;
  isClear: boolean;
  isHeart: boolean;
}

export interface AchievementAward {
  cardpack: CardPack[];
  creadit: number | null;
  title: Title[] | null;
  card: CardResponse[] | null;
}
