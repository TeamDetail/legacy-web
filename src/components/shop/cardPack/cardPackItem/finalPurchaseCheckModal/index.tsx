import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const FinalPurchaseCheckModal = ({
  itemName,
  price,
  close,
  onPurchase,
}: {
  itemName: string;
  price: number;
  close: () => void;
  onPurchase: () => Promise<void>;
}) => {
  return (
    <FinalPurchaseCheckModalContainer>
      <FinalPurchaseCheckModalHeader>
        정말 구매합니까?
        <span>
          {itemName}을 {price} 크레딧으로 구매합니다.
        </span>
      </FinalPurchaseCheckModalHeader>
      <ButtonWrapper>
        <LegacyButton
          size="default"
          isBold
          isFilled={false}
          color={LegacyPalette.labelAlternative}
          children={<ButtonText $buttonType="cancel">취소</ButtonText>}
          handleClick={close}
          width="100%"
        />
        <LegacyButton
          size="default"
          isBold
          isFilled={false}
          color={LegacySementic.purple.normal}
          children={<ButtonText $buttonType="check">확인</ButtonText>}
          handleClick={() => onPurchase().then(close)}
          width="100%"
        />
      </ButtonWrapper>
    </FinalPurchaseCheckModalContainer>
  );
};

export default FinalPurchaseCheckModal;

const FinalPurchaseCheckModalContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  align-items: center;
`;

const FinalPurchaseCheckModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  align-items: center;

  span {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelNeutral};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const ButtonText = styled.div<{ $buttonType: "cancel" | "check" }>`
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${({ $buttonType }) =>
    $buttonType === "cancel"
      ? LegacyPalette.labelAssistive
      : LegacySementic.purple.normal};
`;
