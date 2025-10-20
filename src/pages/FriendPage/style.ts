import { LegacyPalette } from "@src/constants/color/color";
import { PageContainer } from "@src/styles/globalStyles";
import styled from "styled-components";

export const FriendContainer = styled(PageContainer)`
  background: linear-gradient(180deg, #111212 63.28%, #29002e 100%);
`;

export const FriendDataContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 20px;
  border-radius: 20px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
