import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const FriendRequestListContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  gap: 52px;
`;

export const FriendRequestListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    display: flex;
    gap: 8px;
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelAlternative};

    span {
      ${LegacyTypography.Pretendard.Body1.Bold};
      color: ${LegacyPalette.labelNeutral};
    }
  }
`;

export const FriendRequestListDataWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    padding: 8px;
    display: flex;
    gap: 20px;
    border-radius: 8px;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }

  hr {
    border: 0.5px solid ${LegacyPalette.lineAlternative};
  }
`;

export const FriendRequestButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${LegacyPalette.fillNeutral};
    padding: 8px;
  }
`;
