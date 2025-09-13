import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const MailBoxModalContainer = styled.div`
  width: 800px;
  height: 520px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
`;

export const MailBoxModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    ${LegacyTypography.BitBit.Title2};
    color: ${LegacyPalette.labelNormal};
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

export const MailBoxModalMain = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  height: 100%;
  overflow: hidden;
`;

export const MailListWrapper = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export const MailContentContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 16px;
  border-left: 1px solid ${LegacyPalette.lineNeutral};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelNeutral};
  }
`;

export const MailListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  overflow-y: auto;
`;

export const EmptyMailMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const RecieveButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacySementic.yellow.netural};
`;

export const NoneSelectMailMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelNeutral};
  }
  border-left: 1px solid ${LegacyPalette.lineNeutral};
`;

export const MailRewardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Medium};
  color: ${LegacyPalette.labelNormal};

  div {
    display: flex;
    gap: 8px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
  }
`;
