import Card from "@components/common/Card";
import * as S from "./style";
import { RuinDetail } from "@src/types/map/ruin.type";
import { LegacyModal } from "@components/common/LegacyModal";
import { useState } from "react";
import DescriptionModal from "./DescriptionModal";

const Detail = ({ ruinDetail }: { ruinDetail: RuinDetail }) => {
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);

  return (
    <>
      <S.DetailLayout>
        <Card
          cardType="BASIC_CARD"
          cardId={ruinDetail.card.cardId}
          cardImageUrl={ruinDetail.card.cardImageUrl}
          cardName={ruinDetail.card.cardName}
          size="L"
          isAtv={false}
          canInteract={false}
          handleCardChange={() => {}}
        />
        <S.ExplainContainer onClick={() => setIsExplainModalOpen(true)}>
          <span>설명</span>
          {ruinDetail.description}
        </S.ExplainContainer>
        <S.ExplorerContainer>
          <S.DetailItem>
            <span>탐험자 수</span>
            23명
          </S.DetailItem>
          <S.DetailItem>
            <span>획득 비율</span>
            <S.RatioText>
              <span>전체 중 </span>
              3%
            </S.RatioText>
          </S.DetailItem>
        </S.ExplorerContainer>
      </S.DetailLayout>
      <LegacyModal isOpen={isExplainModalOpen} $background>
        <DescriptionModal
          close={() => setIsExplainModalOpen(false)}
          description={ruinDetail.description}
        />
      </LegacyModal>
    </>
  );
};

export default Detail;
