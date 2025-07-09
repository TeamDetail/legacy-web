import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px 2fr minmax(280px, 1fr);
  grid-template-rows: 80px 1fr;
  grid-gap: 12px;
  grid-template-areas:
    "sidebar header header"
    "sidebar datacontainer userrecord";
  width: 100vw;
  height: 100vh;
  padding: 28px;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
`;

export const SidebarArea = styled.div`
  grid-area: sidebar;
`;

export const ProfileHeader = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.BitBit.Title2};
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  padding: 16px;
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
  gap: 12px;
  grid-area: datacontainer;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;
  padding: 24px;
`;

export const MenuBadgeWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;