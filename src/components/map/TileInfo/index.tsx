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
import ArrowLeftImg from "@src/assets/arrowLeft.svg";
import ArrowRightImg from "@src/assets/arrowRight.svg";
import RuinDetailSkeleton from "@components/skeleton/RuinDetailSkeleton";
import { LegacyModal } from "@components/common/LegacyModal";
import Comment from "../Comment";
import QuizModal from "../QuizModal";
import useQuiz from "@src/hooks/map/useQuiz";
import { MyBlockType } from "@src/types/map/normalBlock.type";

interface MenuDataType {
  text: string;
  isAtv: boolean;
  value: string;
}

const TileInfo = ({
  selectedRuins,
  myRuinBlock,
  getMyBlock,
}: {
  selectedRuins: Ruin[] | null;
  myRuinBlock: MyBlockType[];
  getMyBlock: () => Promise<void>;
}) => {
  const { ruinQuiz, getRuinQuizById } = useQuiz();
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<MenuDataType[]>([
    { text: "개요", isAtv: true, value: "" },
    { text: "상세", isAtv: false, value: "" },
    { text: "한줄평", isAtv: false, value: "" },
  ]);
  const {
    getRuinDetailById,
    isRuinDetailLoading,
    ruinDetail,
    commentData,
    getCommentData,
  } = useRuin();
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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
    <>
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
            <RuinDetailSkeleton />
          ) : category[0].isAtv ? (
            <OutLine ruinDetail={ruinDetail} />
          ) : category[1].isAtv ? (
            <Detail ruinDetail={ruinDetail} />
          ) : (
            <Review
              openCommentModal={() => setIsCommentOpen(true)}
              commentData={commentData!}
            />
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
          handleClick={async () => {
            await getRuinQuizById(selectedRuins![page].ruinsId);
            setIsQuizOpen(true);
          }}
        >
          <S.ButtonText $isExplored={!!isMyBlock}>블록 탐험하기</S.ButtonText>
        </LegacyButton>
      </S.TileInfoWrapper>
      <LegacyModal isOpen={isCommentOpen} $background>
        <Comment
          close={() => setIsCommentOpen(false)}
          selectedRuinsId={ruinDetail!}
          refetchCommentData={getCommentData}
        />
      </LegacyModal>
      <LegacyModal isOpen={isQuizOpen} $background>
        <QuizModal
          close={() => setIsQuizOpen(false)}
          ruinQuiz={ruinQuiz!}
          ruinDetail={ruinDetail!}
          getMyBlock={getMyBlock}
        />
      </LegacyModal>
    </>
  );
};

export default TileInfo;
