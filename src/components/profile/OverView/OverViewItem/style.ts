import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const OverViewItem = styled.div<{
  $color: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  white-space: nowrap;
  
  > h1 {
    ${LegacyTypography.Pretendard.Title3.Medium}
    color: ${({ $color }) => $color};
  }
  > section {
    display: flex;
    flex-direction: column;
    background-color: ${LegacyPalette.fillNormal};
    padding: 16px;
    width: 100%;
    border-radius: 12px;
    gap: 16px;
  }
`;

export const OverViewItemHeader = styled.header<{
  $color: string;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    gap: 4px;
    ${LegacyTypography.Pretendard.Title2.Medium};
    color: ${LegacyPalette.labelNeutral};
    > p {
      display: flex;
      ${LegacyTypography.Pretendard.Title2.Bold};
      color: ${({ $color }) => $color};
    }
  }
`;

export const OverViewMainRecord = styled.div`
  flex-grow: 1;
`

export const OverViewDetailItemContainer = styled.section`
  display: grid;
  grid-gap: 8px 16px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const OverViewDetailBar = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: ${LegacyPalette.lineNeutral};
`;

export const OverViewDetailItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Body1.Medium};
  }
  span {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.Pretendard.Body1.Bold};
  }
`;