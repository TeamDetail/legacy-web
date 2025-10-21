export type TitleType = {
  name: string;
  content: string;
  styleId: number;
  titleId: number;
}

export type User = {
  userId: number;
  nickname: string;
  imageUrl: string;
  description: string;
  title: TitleType;
  level: number;
  record: UserRecord;
  credit: number;
};

export type UserMe = User & {
  credit: number;
}

export type UserRecord = {
  adventure: UserAdventureRecord;
  experience: UserExperienceRecord;
}

export type UserAdventureRecord = {
  rank: number;
  allBlocks: number;
  ruinsBlocks: number;
  solvedQuizzes: number;
  wrongQuizzes: number;
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
  shiningCardCount: number;
  exp: number;
};

export type UserRecordKeys = keyof UserAdventureRecord | keyof UserExperienceRecord;