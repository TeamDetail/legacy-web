import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const DailyModalContainer = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;

  > header {
    display: flex;
    justify-content: space-between;

    > svg {
      cursor: pointer;
    }

    div {
      display: flex;
      gap: 4px;
      ${LegacyTypography.BitBit.Title2};
      color: ${LegacyPalette.labelNormal};
    }
  }
`;
