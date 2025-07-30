import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const AchievementWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
  padding: 28px;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(280px, 1fr);
  grid-template-rows: 80px 1fr;
  grid-gap: 12px;
  grid-template-areas:
    "header header"
    "datacontainer userrecord";
  height: 100%;
  flex-grow: 1;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 40px 1fr;
    grid-template-areas:
      "header"
      "awardbutton"
      "datacontainer";
  }
`;

export const AchievementHeader = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.BitBit.Title2};
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  padding: 16px 24px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
  grid-area: datacontainer;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;
  padding: 24px;
  overflow-y: scroll;
`;

export const AchievementSidebar = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: userrecord;
  gap: 12px;

  @media (max-width: 960px) {
    display: none;
  }
`

export const AchievementPercents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${LegacyTypography.Pretendard.Heading2.Bold};
    color: ${LegacyPalette.labelNormal};
    p {
      ${LegacyTypography.Pretendard.Label.Bold}
      color: ${LegacyPalette.labelAlternative};
    }
  } 
`