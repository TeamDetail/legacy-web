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
