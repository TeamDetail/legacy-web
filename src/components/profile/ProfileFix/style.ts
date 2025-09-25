import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const ProfileFixContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  > header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${LegacyPalette.labelNormal};
    > p {
      ${LegacyTypography.Pretendard.Title2.Bold}
    }
  }
`

export const ProfileFixItem = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  > p {
    ${LegacyTypography.BitBit.Headline}
    color: ${LegacyPalette.labelNormal};
    width: 128px;
    flex-shrink: 0;
  }

  > input {
    display: none;
  }
`

export const ProfileFixUserImg = styled.div<{
  $img: string;
}>`
  background: ${({ $img }) => `url("${$img}")`};
  background-size: cover;
  background-position: center;
  width: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  cursor: pointer;
`;

export const ProfileUserDescription = styled.textarea`
  resize: none;
  width: 100%;
  height: fit-content;
  color: ${LegacyPalette.labelNeutral};
  border-radius: 12px;
  ${LegacyTypography.Pretendard.Body2.Bold}
  background-color: ${LegacyPalette.fillNormal};
  border: none;
  padding: 16px;
`