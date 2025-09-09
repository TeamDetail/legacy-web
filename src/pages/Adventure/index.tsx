import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import { LegacyModal } from "@components/common/LegacyModal";
import { Suspense, useState } from "react";
import QuizModal from "@components/map/QuizModal";
import QuizComponentSkeleton from "@components/skeleton/QuizComponentSkeleton";
import { Ruin } from "@src/types/map/ruin.type";
import useQuiz from "@src/hooks/map/useQuiz";

const Adventure = () => {
  const { getRuinQuizById } = useQuiz();
  const [selectedRuins, setSelectedRuins] = useState<Ruin[] | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  const handleQuizOpen = (id: number) => {
    console.log("탐험 클릭");
    getRuinQuizById(id);

    setTimeout(() => {
      setIsQuizOpen(true);
    }, 300);
  };

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap setSelectedRuins={setSelectedRuins} />
      </S.GoogleMapWrapper>
      <S.Container>
        <Sidebar />
      </S.Container>
      {selectedRuins && (
        <S.InfoPopup>
          <TileInfo
            handleButtonClick={handleQuizOpen}
            selectedRuins={selectedRuins}
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
