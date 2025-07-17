import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const CodexItemHover = styled.div`
  > :hover {
    background-color: ${LegacyPalette.backgroundNeutral};
  }
  cursor: pointer;
`

export const CodexItemContainer = styled.div<{ $isCollectAll: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 8px 8px;
  ${LegacyTypography.Pretendard.Heading2.Bold};
  color: ${LegacyPalette.labelNormal};
  border-radius: 12px;

  @media (max-width: 640px) {
    justify-content: center;
  }

  > div {
    display: flex;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${LegacyPalette.fillNormal};
    align-items: center;
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Body2.Regular}

    @media (max-width: 640px) {
      display: none;
    }

    > p {
      color: ${LegacyPalette.labelNormal};
      ${LegacyTypography.Pretendard.Body2.Bold};
    }

    > span {
      color: ${({ $isCollectAll }) => $isCollectAll === "true" && LegacySementic.yellow.normal};
      @media (max-width: 720px) {
        display: none;
      }
    }
  }
`

export const RegionFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  padding: 8px;
  padding-bottom: 24px;
  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      ${LegacyTypography.Pretendard.Title2.Bold};
      color: ${LegacyPalette.labelNormal};
    }
  }
`;

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  place-items: center;
  grid-auto-rows: 1fr;
  gap: 20px;
  height: fit-content;
  border-radius: 16px;
  padding: 0;
`;

export const CardNotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Title3.Bold}
`