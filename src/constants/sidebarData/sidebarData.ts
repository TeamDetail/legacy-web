import { LegacySementic } from "../color/color";
import Adventure from "@src/assets/sidebarIcon/adventure.svg?react";
import Shop from "@src/assets/sidebarIcon/shop.svg?react";
import Ranking from "@src/assets/sidebarIcon/ranking.svg?react";
import Achievement from "@src/assets/sidebarIcon/achievement.svg?react";
import Course from "@src/assets/sidebarIcon/course.svg?react"

export const SIDEBAR_DATA = [
  {
    text: "탐험",
    url: "/adventure",
    color: LegacySementic.blue.alternative,
    icon: Adventure,
  },
  {
    text: "코스",
    url: "/course",
    color: LegacySementic.blue.alternative,
    icon: Course,
  },
  {
    text: "상점",
    url: "/shop",
    color: LegacySementic.green.alternative,
    icon: Shop,
  },
  {
    text: "랭킹",
    url: "/ranking/explore/all",
    color: LegacySementic.red.alternative,
    icon: Ranking,
  },
  {
    text: "도전과제",
    url: "/achievement",
    color: LegacySementic.yellow.alternative,
    icon: Achievement,
  },
]