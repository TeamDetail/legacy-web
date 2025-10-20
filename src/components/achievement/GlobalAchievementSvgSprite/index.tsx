import { createPortal } from "react-dom";
import AchievementSvgSprite from "@src/assets/achievementBadge/achievementBadgeSvg.svg?raw";
import styled from "styled-components";

const GlobalAchievementSvgSprite = () =>
  createPortal(
    <GlobalAchievementSvgSpriteContainer
      className="hidden"
      dangerouslySetInnerHTML={{ __html: AchievementSvgSprite }}
    />,
    document.body
  );

export default GlobalAchievementSvgSprite;

const GlobalAchievementSvgSpriteContainer = styled.div`
  display: none;
`