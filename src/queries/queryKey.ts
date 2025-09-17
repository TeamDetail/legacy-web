import { AchievementValueType } from "@src/types/achievement/achievement.type";

export const QUERY_KEYS = {
  user: {
    getMe: "userGetMe",
    getUser: "userGetUser",
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
    checkRuinQuizAnswer: "quizCheckRuinQuizAnswer",
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
};
