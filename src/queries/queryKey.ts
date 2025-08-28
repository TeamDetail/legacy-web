export const QUERY_KEYS = Object.freeze({
  user: {
    getMe: "userGetMe",
    getUser: "userGetUser",
  },
  ruin: {
    getRuinDetail: (id: number) => `mapGetRuinDetail/${id}`,
    getRuinQuiz: "mapGetRuinQuiz",
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
  ranking: (type: "trial" | "explore" | "level", scope: "all" | "friend") =>
    `ranking/${type}/${scope}`,
  course: {
    getAllCourse: ["course"],
    getCourseDetailById: (id: number) => [`course/${id}`],
  },
});
