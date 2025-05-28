import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100%;
  padding: 24px 20px;
  gap: 24px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  > p {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.BitBit.Title2}
  }
`

export const SidebarUserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  
  & img {
    border-radius: 999px;
    background-color: red;
    width: 56px;
    height: 56px;
  }

  & section {
    display: flex;
    flex-direction: column;

    & p {
      ${LegacyTypography.Pretendard.Caption1.Bold}
      color: ${LegacyPalette.labelAlternative};
    }
  }
`

export const SidebarUserName = styled.div`
  white-space: nowrap;
  
  ${LegacyTypography.Pretendard.Headline.Bold}
  color: ${LegacyPalette.labelNormal};
`