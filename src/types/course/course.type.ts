import { RuinDetail } from "../map/ruin.type";

export interface Course {
  courseId: number;
  courseName: string;
  creator: string;
  tag: string[];
  description: string;
  heartCount: number;
  clearCount: number;
  eventId: number;
  thumbnail: string;
  clearRuinsCount: number;
  maxRuinsCount: number;
  clear: boolean;
  heart: boolean;
}

export interface CourseDetail {
  courseId: number;
  courseName: string;
  creator: string;
  tag: string[];
  description: string;
  heartCount: number;
  clearCount: number;
  eventId: number;
  thumbnail: string;
  clearRuinsCount: number;
  maxRuinsCount: number;
  clear: true;
  heart: true;
  ruins: CourseElementRuin[];
}

export interface CourseElementRuin {
  clear: boolean;
  data: RuinDetail
}