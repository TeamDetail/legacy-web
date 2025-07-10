import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const CodexItemHover = styled.div`
  > :hover {
    background-color: ${LegacyPalette.backgroundNeutral};
  }
  cursor: pointer;
`
export const CodexItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 8px;
  ${LegacyTypography.Pretendard.Heading2.Bold};
  color: ${LegacyPalette.labelNormal};
  border-radius: 12px;
  > div {
    display: flex;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${LegacyPalette.fillNormal};
    align-items: center;
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Body2.Regular}
    > p {
      color: ${LegacyPalette.labelNormal};
      ${LegacyTypography.Pretendard.Body2.Bold};
    }
  }
`

export const RegionFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 8px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      ${LegacyTypography.Pretendard.Heading2.Bold};
      color: ${LegacyPalette.labelNormal};
    }
  }
`;

export const DummyCardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: 100%;
  background: ${LegacyPalette.fillNormal};
  border-radius: 16px;
  padding: 0;
`;