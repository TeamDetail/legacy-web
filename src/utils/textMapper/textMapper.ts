import { AchievementType, AchievementValueType } from "@src/types/achievement/achievement.type";
import { UserRecordKeys } from "@src/types/user/user.type";

export const achieveGoalMapper = (
  type: AchievementType,
  value: number,
  // 특정한 카드 획득 혹은 코스 완료 도전과제에 사용
  stateItem?: string,
): string => {
  switch (type) {
    case "CARD":
      return "카드 " + value + "개 획득" 
    case "SHINING_CARD":
      return "찬란한 카드 " + value + "개 획득"; 
    case "CARD_PACK":
      return "카드팩 " + value + "회 개봉"; 
    case "STATED_CARD":
      return `[${stateItem}] 카드 획득`;
    case "RUINS":
      return "유적지 " + value + "개 탐험"
    case "BLOCKS":
      return "블록 " + value + "개 탐험";
    case "CLEAR_COURSE":
      return "코스 " + value + "개 완료";
    case "MAKE_COURSE":
      return "코스 " + value + "개 제작";
    case "STATE_COURSE":
      return `[${stateItem}] 코스 완료`;
    case "SOLVE_QUIZ":
      return "퀴즈 " + value + "개 정답";
    case "WRONG_QUIZ":
      return "퀴즈 " + value + "개 오답";
    case "BUY_ITEM":
      return "아이템 " + value + "개 구매";
    case "TITLE":
      return "칭호 " + value + "개 소지";
    default:
      return ""
  }
}

export const achievementValueTypeMapper: Record<AchievementValueType, string> = {
  "EXPLORE": "탐험",
  "LEVEL": "숙련",
  "HIDDEN": "히든",
}
export const userRecordMapper: Record<UserRecordKeys, string> = {
  "allBlocks": "탐험 완료한 블록",
  "ruinsBlocks": "탐험 완료한 유적지",
  "cardCount": "수집한 카드",
  "shiningCardCount": "수집한 찬란한 카드",
  "commentCount": "남긴 한줄평",
  "hiddenAchieve": "완수한 히든 도전과제",
  "adventureAchieve": "완수한 탐험 도전과제",
  "experienceAchieve": "완수한 숙련 도전과제",
  "titleCount": "소지한 칭호",
  "createdAt": "가입일자",
  "solvedQuizzes": "맞춘 퀴즈",
  "wrongQuizzes": "틀린 퀴즈",
  "clearCourse": "완료한 코스",
  "makeCourse": "만든 코스",
  "exp": "획득한 경험치",
  "rank": "위",
}