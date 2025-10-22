import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
  padding: 28px;
`

export const MainContainer = styled.div<{
  $isOverViewPage: string,
}>`
  display: grid;
  grid-template-columns: 2fr minmax(280px, 1fr);
  grid-template-rows: 80px 1fr;
  grid-gap: 12px;
  grid-template-areas:
    "header header"
  ${({$isOverViewPage}) => $isOverViewPage === "true" ? `"datacontainer datacontainer"` : `"datacontainer userrecord"`};
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
`;

export const SidebarArea = styled.div`
  min-width: 220px;

  @media (max-width:940px) {
    min-width: 108px;
  }
`;

export const UserRecordArea = styled.div`
  grid-area: userrecord;
  display: flex;
  flex-direction: column;
  gap: 24px;
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

export const MenuBadgeWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;