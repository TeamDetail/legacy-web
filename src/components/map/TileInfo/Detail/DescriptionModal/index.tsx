import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import Close from "@src/assets/close.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";

const DescriptionModal = ({
  close,
  description,
}: {
  close: () => void;
  description: string;
}) => {
  return (
    <DescriptionModalContainer>
      <DescriptionModalHeader>
        설명
        <Close onClick={close} style={{ cursor: "pointer" }} />
      </DescriptionModalHeader>
      <DescriptionModalMain>{description}</DescriptionModalMain>
    </DescriptionModalContainer>
  );
};

export default DescriptionModal;

const DescriptionModalContainer = styled.div`
  width: 416px;
  min-height: 360px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 12px;
`;

const DescriptionModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const DescriptionModalMain = styled.div`
  ${LegacyTypography.Pretendard.Body1.Regular};
  color: ${LegacyPalette.labelNeutral};
  white-space: pre-wrap;
`;
