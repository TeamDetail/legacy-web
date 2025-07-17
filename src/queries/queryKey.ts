export const QUERY_KEYS = Object.freeze({
  user: {
    getMe: "userGetMe",
    getUser: "userGetUser"
  },
  card: {
    getCardByRegion: "cardGetByRegion"
  },
  ranking: (type: "trial" | "explore" | "level", scope: "all" | "friend") => `ranking/${type}/${scope}`
})