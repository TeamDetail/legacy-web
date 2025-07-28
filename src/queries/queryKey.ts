export const QUERY_KEYS = Object.freeze({
  user: {
    getMe: "userGetMe",
    getUser: "userGetUser",
  },
  ruin: {
    getRuinDetail: `mapGetRuinDetail`,
    getRuinQuiz: "mapGetRuinQuiz",
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
  ranking: (type: "trial" | "explore" | "level", scope: "all" | "friend") => `ranking/${type}/${scope}`
})
