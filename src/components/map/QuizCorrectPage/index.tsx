import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ClappingHandsImg from "@src/assets/clapping-hands-svgrepo-com1.svg";
import Card from "@components/common/Card";
import { RuinDetail } from "@src/types/map/ruin.type";

type PageType = "congratulation" | "showCard";

const QuizCorrectPage = ({
  closeFunction,
  ruinDetail,
  getMyBlock,
}: {
  closeFunction: () => void;
  ruinDetail: RuinDetail;
  getMyBlock: () => Promise<void>;
}) => {
  const [page, setPage] = useState<PageType>("congratulation");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setPage("showCard");
        getMyBlock();
        setIsVisible(true);
      }, 300);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (page === "showCard") {
      const closeTimer = setTimeout(() => {
        closeFunction();
      }, 3000);

      return () => clearTimeout(closeTimer);
    }
  }, [page]);

  return (
    <QuizResultWrapper>
      {page === "congratulation" ? (
        <FadeWrapper $isVisible={isVisible}>
          <CongratulationImg />
          축하해요!
          <span>퀴즈를 모두 맞추다니.. 대단해요!</span>
        </FadeWrapper>
      ) : (
        <FadeWrapper $isVisible={isVisible}>
          카드를 획득했어요!
          <Card
            cardType="BASIC_CARD"
            isAtv={false}
            cardImageUrl={ruinDetail.card.cardImageUrl}
            cardId={ruinDetail.card.cardId}
            cardName={ruinDetail.card.cardName}
            canInteract={false}
            size="L"
            nationAttributeName={ruinDetail.card.nationAttributeName}
            lineAttributeName={ruinDetail.card.lineAttributeName}
            regionAttributeName={ruinDetail.card.regionAttributeName}
            handleCardChange={() => {}}
          />
        </FadeWrapper>
      )}
    </QuizResultWrapper>
  );
};

export default QuizCorrectPage;

const FadeWrapper = styled.div<{ $isVisible: boolean }>`
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Title2.Bold}

  span {
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Headline.Medium}
  }
`;

const QuizResultWrapper = styled.div`
  width: 400px;
  height: 560px;
  display: flex;
  background-color: ${LegacyPalette.backgroundNormal};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  text-align: center;
`;

const CongratulationImg = styled.img.attrs({ src: `${ClappingHandsImg}` })`
  width: 108px;
  height: 108px;
`;
