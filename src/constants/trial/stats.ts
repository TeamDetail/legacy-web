import { LegacyPalette, LegacySementic } from "../color/color"

export const USER_STATS_OBJECT: Record<userStatsType, string> = {
  "snowflakeCapacity": "설화 수용량",
	"storeRestock": "강제 재입고",
  "creditCollect": "크레딧 회수",
	"dropCount": "버리기 기회",
}

export const USER_STATS_COUNTER = {
  "snowflakeCapacity": "개",
	"storeRestock": "회",
  "creditCollect": "%",
	"dropCount": "번",
}

export const USER_STATS_COLOR = {
  "snowflakeCapacity": LegacyPalette.primaryNormal,
  "storeRestock": LegacySementic.green.normal,
  "creditCollect": LegacySementic.blue.normal,
  "dropCount":LegacySementic.red.normal
}

export type userStatsType = "snowflakeCapacity" | "storeRestock" | "creditCollect" | "dropCount"

export const USER_STATS: userStatsType[] = [
  "snowflakeCapacity",
  "storeRestock",
  "creditCollect",
  "dropCount"
]