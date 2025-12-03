import Card from "@components/common/Card";
import * as S from "./style";
import { RuinDetail } from "@src/types/map/ruin.type";
import useModalStore from "@src/store/useModalStore";
import DescriptionModal from "./DescriptionModal";

const Detail = ({ ruinDetail }: { ruinDetail: RuinDetail }) => {
  const { setOpenModal, setCloseModal } = useModalStore();

  return (
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
        nationAttributeName={ruinDetail.card.nationAttributeName}
        lineAttributeName={ruinDetail.card.lineAttributeName}
        regionAttributeName={ruinDetail.card.regionAttributeName}
      />
      <S.ExplainContainer
        onClick={() => {
          if (ruinDetail.description !== "") {
            setOpenModal({
              element: (
                <DescriptionModal
                  close={setCloseModal}
                  description={ruinDetail.description}
                />
              ),
              key: "descriptionModal",
            });
          }
        }}
      >
        <span>설명</span>
        {ruinDetail.description === ""
          ? "설명이 없습니다."
          : ruinDetail.description}
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
  );
};

export default Detail;
