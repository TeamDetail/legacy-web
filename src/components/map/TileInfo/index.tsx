import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import useRuin from "@src/hooks/map/useRuin";
import Card from "@components/common/Card";
import useBlock from "@src/hooks/map/useBlock";

const TileInfo = ({ handleButtonClick }: { handleButtonClick: () => void }) => {
  const { ruinDetail } = useRuin();
  const { myRuinBlock } = useBlock();
  const card = ruinDetail?.cards[0];

  return (
    <S.InfoContainer>
      <S.HeadlineBold>블록 탐험</S.HeadlineBold>
      <S.Column8>
        <S.LabelMedieum>탐험 필요 크레딧</S.LabelMedieum>
        <S.Row4>
          <S.CreditText>{ruinDetail?.name}</S.CreditText>
          <S.CreditAddText></S.CreditAddText>
        </S.Row4>
      </S.Column8>
      {ruinDetail?.cards[0] && (
        <S.Column8>
          <S.LabelMedieum>유적지 정보</S.LabelMedieum>
          <Card
            cardType={card!.cardType}
            isAtv={false}
            cardImageUrl={card!.cardImageUrl}
            cardId={card!.cardId}
            cardName={card!.cardName}
            canInteract={false}
            size="L"
            nationAttributeName={card!.nationAttributeName}
            lineAttributeName={card!.lineAttributeName}
            regionAttributeName={card!.regionAttributeName}
            handleCardChange={() => {}}
          />
        </S.Column8>
      )}

      <LegacyButton
        size="default"
        isBold={false}
        isFilled={false}
        color={
          myRuinBlock.some(
            (ruinBlock) => ruinBlock.ruinsId === ruinDetail!.ruinsId
          )
            ? LegacyPalette.lineNeutral
            : LegacySementic.blue.netural
        }
        width="100%"
        children={
          <S.ExploreButtonChildren
            $isExplored={
              !myRuinBlock.some(
                (ruinBlock) => ruinBlock.ruinsId === ruinDetail!.ruinsId
              )
            }
          >
            {!myRuinBlock.some(
              (ruinBlock) => ruinBlock.ruinsId === ruinDetail!.ruinsId
            )
              ? "블록 탐험하기"
              : "이미 탐험한 블록입니다"}
          </S.ExploreButtonChildren>
        }
        handleClick={() => {
          if (
            !myRuinBlock.some(
              (ruinBlock) => ruinBlock.ruinsId === ruinDetail!.ruinsId
            )
          ) {
            handleButtonClick();
          }
        }}
      />
    </S.InfoContainer>
  );
};

export default TileInfo;
