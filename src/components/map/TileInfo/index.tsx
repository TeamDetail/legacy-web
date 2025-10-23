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
import ArrowLeftImg from "@src/assets/arrowLeft.svg?react";
import ArrowRightImg from "@src/assets/arrowRight.svg?react";
import RuinDetailSkeleton from "@components/skeleton/RuinDetailSkeleton";
import { MyBlockType } from "@src/types/map/normalBlock.type";
import useModalStore from "@src/store/useModalStore";
import Comment from "../Comment";
import QuizWarnModal from "@components/map/TileInfo/QuizWarnModal";

interface MenuDataType {
  text: string;
  isAtv: boolean;
  value: string;
}

const TileInfo = ({
  selectedRuins,
  myRuinBlock,
}: {
  selectedRuins: Ruin[] | null;
  myRuinBlock: MyBlockType[];
}) => {

  const {
    getRuinDetailById,
    isRuinDetailLoading,
    ruinDetail,
    commentData,
    getCommentData,
  } = useRuin();
  const { setOpenModal, setCloseModal } = useModalStore();
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<MenuDataType[]>([
    { text: "개요", isAtv: true, value: "overview" },
    { text: "상세", isAtv: false, value: "detail" },
    { text: "한줄평", isAtv: false, value: "review" },
  ]);

  const isMyBlock =
    ruinDetail &&
    myRuinBlock.some((ruinBlock) => ruinBlock.ruinsId === ruinDetail.ruinsId);

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
                <ArrowLeftImg
                  fill={
                    page === 0
                      ? LegacyPalette.labelDisabled
                      : LegacyPalette.labelNormal
                  }
                />
              </S.ArrowContainer>
              {`${page + 1} / ${selectedRuins!.length}`}
              <S.ArrowContainer
                onClick={() => {
                  if (page !== selectedRuins!.length - 1) {
                    setPage((prev) => prev + 1);
                  }
                }}
              >
                <ArrowRightImg
                  fill={
                    page === selectedRuins!.length - 1
                      ? LegacyPalette.labelDisabled
                      : LegacyPalette.labelNormal
                  }
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
          <RuinDetailSkeleton />
        ) : category[0].isAtv ? (
          <OutLine ruinDetail={ruinDetail} />
        ) : category[1].isAtv ? (
          <Detail ruinDetail={ruinDetail} />
        ) : (
          <Review
            openCommentModal={() =>
              setOpenModal({
                element: (
                  <Comment
                    close={setCloseModal}
                    selectedRuinsId={ruinDetail}
                    refetchCommentData={getCommentData}
                  />
                ),
                key: "commentModal",
              })
            }
            commentData={commentData!}
          />
        )}
      </S.TileInfoContainer>
      <LegacyButton
        size="default"
        isBold={false}
        isFilled={false}
        color={isMyBlock ? LegacyPalette.lineNeutral : LegacySementic.blue.netural}
        width="100%"
        handleClick={() => {
          if (!isMyBlock) {
            setOpenModal({
              element: <QuizWarnModal close={setCloseModal} ruinDetail={ruinDetail!} />,
              key: "quizWarnModal",
            });
          }
        }}
      >
        <S.ButtonText $isExplored={!!isMyBlock}>블록 탐험하기</S.ButtonText>
      </LegacyButton>
    </S.TileInfoWrapper>
  );
};

export default TileInfo;
