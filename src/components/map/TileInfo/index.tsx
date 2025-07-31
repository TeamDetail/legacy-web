import * as S from "./style";
import { Ruin } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";
import { MenuBadge } from "@components/common/MenuBadge";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import LegacyButton from "@components/common/LegacyButton";
import OutLine from "./OutLine";
import Detail from "./Detail";
import Review from "./Review";
import useRuin from "@src/hooks/map/useRuin";
import useBlock from "@src/hooks/map/useBlock";
import ArrowLeftImg from "@src/assets/arrowLeft.svg";
import ArrowRightImg from "@src/assets/arrowRight.svg";

interface MenuDataType {
  text: string;
  isAtv: boolean;
}

const TileInfo = ({
  handleButtonClick,
  selectedRuins,
}: {
  handleButtonClick: () => void;
  selectedRuins: Ruin[] | null;
}) => {
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<MenuDataType[]>([
    { text: "개요", isAtv: true },
    { text: "상세", isAtv: false },
    { text: "한줄평", isAtv: false },
  ]);
  const { getRuinDetailById, isRuinDetailLoading, ruinDetail } = useRuin();
  const { myRuinBlock } = useBlock();

  const isMyBlock = myRuinBlock.some(
    (ruinBlock) => ruinBlock.ruinsId === ruinDetail!.ruinsId
  );

  useEffect(() => {
    if (selectedRuins) {
      getRuinDetailById(selectedRuins[page].ruinsId);
    }
  }, [page]);

  useEffect(() => {
    setPage(0);
    if (selectedRuins) {
      getRuinDetailById(selectedRuins[0].ruinsId);
    }
  }, [selectedRuins]);

  return (
    <S.TileInfoWrapper>
      <S.TileInfoContainer>
        <S.HeaderContainer>
          블록 탐험
          {selectedRuins!.length !== 1 && (
            <S.PageControllerContainer>
              <S.ArrowContainer
                onClick={() => {
                  if (page !== 0) {
                    setPage((prev) => prev - 1);
                  }
                }}
              >
                <S.Arrow $isLastPage={page === 0} src={ArrowLeftImg} />
              </S.ArrowContainer>
              {`${page + 1} / ${selectedRuins!.length}`}
              <S.ArrowContainer
                onClick={() => {
                  if (page !== selectedRuins!.length - 1) {
                    setPage((prev) => prev + 1);
                  }
                }}
              >
                <S.Arrow
                  $isLastPage={page === selectedRuins!.length - 1}
                  src={ArrowRightImg}
                />
              </S.ArrowContainer>
            </S.PageControllerContainer>
          )}
        </S.HeaderContainer>
        <MenuBadge
          badgeColor={LegacyPalette.primaryNormal}
          menuData={category}
          setMenuData={setCategory}
        />
        {isRuinDetailLoading || !ruinDetail ? (
          <div />
        ) : category[0].isAtv ? (
          <OutLine ruinDetail={ruinDetail} />
        ) : category[1].isAtv ? (
          <Detail />
        ) : (
          <Review />
        )}
      </S.TileInfoContainer>
      <LegacyButton
        size="default"
        isBold={false}
        isFilled={false}
        color={
          isMyBlock ? LegacyPalette.lineNeutral : LegacySementic.blue.netural
        }
        width="100%"
        handleClick={() => {
          if (!isMyBlock) handleButtonClick();
        }}
      >
        <S.ButtonText $isExplored={isMyBlock}>블록 탐험하기</S.ButtonText>
      </LegacyButton>
    </S.TileInfoWrapper>
  );
};

export default TileInfo;
