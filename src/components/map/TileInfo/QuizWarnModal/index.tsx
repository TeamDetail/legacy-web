import LegacyButton from "@components/common/LegacyButton";
import QuizModal from "@components/map/QuizModal";
import NeedCredit from "@components/map/TileInfo/NeedCredit";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useQuiz from "@src/hooks/map/useQuiz";
import useModalStore from "@src/store/useModalStore";
import { Ruin, RuinDetail } from "@src/types/map/ruin.type";
import styled from "styled-components";

type QuizWarnModalProps = {
  close: () => void;
  getMyBlock: () => Promise<void>;
  page: number;
  selectedRuins: Ruin[] | null;
  ruinDetail: RuinDetail
};

const QuizWarnModal = ({
  close,
  getMyBlock,
  page,
  selectedRuins,
  ruinDetail
}: QuizWarnModalProps) => {
  const { setOpenModal, setCloseModal } = useModalStore();
  const { getRuinQuizById } = useQuiz();

  return (
    <QuizWarnModalContainer>
      <QuizWarnModalHeader>
        탐험 시 크레딧이 소모됩니다.
        <NeedCredit />
      </QuizWarnModalHeader>
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
          handleClick={() => {
            getRuinQuizById(selectedRuins![page].ruinsId);
            setOpenModal({
              element: (
                <QuizModal
                  close={setCloseModal}
                  ruinDetail={ruinDetail}
                  getMyBlock={getMyBlock}
                />
              ),
              key: "quizModal",
            });
          }}
          width="100%"
        />
      </ButtonWrapper>
    </QuizWarnModalContainer>
  );
}

export default QuizWarnModal


const QuizWarnModalContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  align-items: center;
`;

const QuizWarnModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  align-items: center;
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
