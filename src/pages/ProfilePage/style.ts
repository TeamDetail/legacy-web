import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";

export const Container = styled.div`
  color: ${LegacyPalette.labelNormal};
  display: grid;
  grid-template-columns: 220px 340px 1fr;
  grid-template-rows: 1fr 4fr 5fr;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
  padding: 28px;
`;

export const SidebarArea = styled.div`
  grid-row: 1 / span 3;
  grid-column: 1 / 2;
`;

export const ProfileHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / span 2;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  ${LegacyTypography.BitBit.Title2}
`;

export const UserInfo = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DataContainer = styled.div`
  grid-row: 2 / span 2;
  grid-column: 3 / 4;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RecordContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuBadgeWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const UserName = styled.div`
  color: ${LegacyPalette.labelNormal};
  font-size: 24px;
  font-weight: 700;
`; 