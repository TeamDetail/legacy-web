import { AchievementValueType } from "@src/types/achievement/achievement.type";

export const QUERY_KEYS = {
  user: {
    getMe: ["userGetMe"],
    getUser: "userGetUser",
    getUserByNickname: (nickname: string) =>
      `userGetUserByNickname/${nickname}`,
    getTitles: ["userGetTitles"],
  },
  ruin: {
    getRuinDetail: (id: number) => `mapGetRuinDetail/${id}`,
    getRuinQuiz: (id: number) => `mapGetRuinQuiz/${id}`,
    getRuinsByName: (name: string) => [`ruinGetRuinsByName/${name}`],
  },
  card: {
    getCardByRegion: "cardGetByRegion",
  },
  quiz: {
    checkRuinQuizAnswer: ["quizCheckRuinQuizAnswer"],
    getRuinQuizHint: (id: number) => [`quizHint/${id}`],
    getQuizCost: ["quizCost"],
  },
  block: {
    getMyBlock: "blockGetMyBlock",
  },
  ranking: (type: "trial" | "explore" | "level", scope: "all" | "friend") => [
    `ranking/${type}/${scope}`,
  ],
  course: {
    getAllCourse: ["course"],
    getCourseDetailById: (id: number) => [`course/${id}`],
  },
  shop: {
    getCardpack: ["getCardpack"],
  },
  mail: {
    getMail: ["mail"],
  },
  comment: {
    getCommentById: (id: number) => ["getCommentById", `${id}`],
  },
  inventory: {
    getMyInventory: ["getMyInventory"],
  },
  achievement: {
    getAchievement: (type: AchievementValueType) => ["getAchievement", type],
  },
  friend: {
    getMyFriends: ["getMyFriends"],
    getMyFriendRequests: (s: "sent" | "requests") => ["getMyFriendRequests", s],
    getMyFriendCode: ["getMyFriendCode"],
  },
  daily: {
    getDailyData: ["getDailyData"],
  },
  event: {
    getEvent: ["getEvent"],
    getEventDetail: (id: number) => ["getEventDetail", `${id}`],
  },
};
