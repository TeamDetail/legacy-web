export type Title = {
  name: string;
  content: string;
  titleId: number;
  grade: number;
}

export type User = {
  userId: number;
  nickname: string;
  imageUrl: string;
  description: string;
  title: Title;
  level: number;
  record: UserRecord;
  credit: number;
};

export type UserRecord = {
  adventure: UserAdventureRecord;
  experience: UserExperienceRecord;
}

export type UserAdventureRecord = {
  rank: number;
  allBlocks: number;
  ruinsBlocks: number;
  solvedQuizs: number;
  wrongQuizs: number;
  commentCount: number;
  clearCourse: number;
  makeCourse: number;
};

export type UserExperienceRecord = {
  rank: number;
  adventureAchieve: number;
  experienceAchieve: number;
  hiddenAchieve: number;
  createdAt: string;
  titleCount: number;
  cardCount: number;
};

export type UserRecordKeys = keyof UserAdventureRecord | keyof UserExperienceRecord;