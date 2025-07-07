import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const TrialDeckChooseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 640px;
  height: 560px;
  background-color: ${LegacyPalette.backgroundNeutral};
  border-radius: 24px;
  color: ${LegacyPalette.labelNormal};
  justify-content: space-between;
  align-items: center;
`

export const DeckCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const DeckChooseButtonContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`