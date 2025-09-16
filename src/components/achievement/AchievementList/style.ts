import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const AchievementListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  gap: 16px;
  padding: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
`