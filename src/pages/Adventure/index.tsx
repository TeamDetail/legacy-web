import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import useMapPixel from "@src/hooks/map/useRuin";
import { LegacyModal } from "@components/common/LegacyModal";
import { Suspense, useState } from "react";
import QuizModal from "@components/map/QuizModal";
import QuizComponentSkeleton from "@components/skeleton/QuizComponentSkeleton";

const Adventure = () => {
  const { ruinDetail, getRuinQuiz, ruins, getRuin, getRuinDetailById } =
    useMapPixel();

  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap
          ruins={ruins}
          getRuin={getRuin}
          getRuinDetailById={getRuinDetailById}
        />
      </S.GoogleMapWrapper>

      <S.Container>
        <Sidebar />
      </S.Container>

      {ruinDetail && (
        <S.InfoPopup>
          <TileInfo
            handleButtonClick={() => {
              getRuinQuiz();

              setTimeout(() => {
                setIsQuizOpen(true);
              }, 300);
            }}
          />
        </S.InfoPopup>
      )}

      <LegacyModal isOpen={isQuizOpen} $background={true}>
        <Suspense fallback={<QuizComponentSkeleton />}>
          <QuizModal close={() => setIsQuizOpen(false)} />
        </Suspense>
      </LegacyModal>
    </S.BackStage>
  );
};

export default Adventure;
