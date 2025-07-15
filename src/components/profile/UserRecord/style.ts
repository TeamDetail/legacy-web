import styled from "styled-components";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";

export const UserRecordArea = styled.div`
  grid-area: userrecord;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${LegacyPalette.labelNormal};
`;

export const ProgressBars = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  padding: 24px;
  gap: 12px;
`;

export const Records = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;
  padding: 24px;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  height: 100%;
`; 