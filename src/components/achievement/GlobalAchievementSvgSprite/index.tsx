import { createPortal } from "react-dom"
import AchievementSvgSprite from "@src/assets/achievementBadge/achievementBadgeSvg.svg"

const GlobalAchievementSvgSprite = () => createPortal(AchievementSvgSprite, document.body)

export default GlobalAchievementSvgSprite