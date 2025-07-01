import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const TrialDeckChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 500px;
  height: 500px;
  background-color: ${LegacyPalette.backgroundNeutral};
  border-radius: 24px;
  color: ${LegacyPalette.labelNormal};
`