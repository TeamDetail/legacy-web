import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const YetMakingPageContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #111212 61.96%, #243824 100%);
  padding: 28px;
`

export const YetPageMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
  color: ${LegacyPalette.labelNormal};
  > h1 {
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Title1.Medium};
    > span {
      color: ${LegacyPalette.labelNormal};
      ${LegacyTypography.Pretendard.Title1.Bold};
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    > p {
      color: ${LegacyPalette.labelAlternative};
      ${LegacyTypography.Pretendard.Heading2.Regular}
    }
  }
`