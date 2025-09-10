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
import SearchRuinsModal from "@components/map/SearchRuinsModal";
import { LatLng } from "@src/types/map/latLng.type";
import Search from "@src/assets/search.svg?react";

const Adventure = () => {
  const { getRuinQuizById } = useQuiz();
  const [selectedRuins, setSelectedRuins] = useState<Ruin[] | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isSearchRuinsOpen, setIsSearchRuinsOpen] = useState<boolean>(false);
  const [center, setCenter] = useState<LatLng>({ lat: 35.8722, lng: 128.6025 });
  const [zoomLevel, setZoomLevel] = useState<number>(11);

  const handleQuizOpen = (id: number) => {
    getRuinQuizById(id);

    setTimeout(() => {
      setIsQuizOpen(true);
    }, 300);
  };

  const handleSelectRuin = (ruin: Ruin) => {
    setSelectedRuins([ruin]);
    setCenter({ lat: ruin.latitude, lng: ruin.longitude });
    setZoomLevel(15);
    setIsSearchRuinsOpen(false);
  };

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap
          setSelectedRuins={setSelectedRuins}
          center={center}
          zoomLevel={zoomLevel}
        />
      </S.GoogleMapWrapper>
      <S.Container>
        <Sidebar />
      </S.Container>

      <LegacyModal isOpen={isSearchRuinsOpen} $background>
        <SearchRuinsModal
          close={() => setIsSearchRuinsOpen(false)}
          onSelectRuin={handleSelectRuin}
        />
      </LegacyModal>
      <S.InfoWrapper>
        <S.AdventureMenuContainer>
          <div onClick={() => setIsSearchRuinsOpen(true)}>
            <Search width={22} height={22} />
          </div>
        </S.AdventureMenuContainer>
        {selectedRuins && (
          <S.InfoPopup>
            <TileInfo
              handleButtonClick={handleQuizOpen}
              selectedRuins={selectedRuins}
            />
          </S.InfoPopup>
        )}
      </S.InfoWrapper>
      <LegacyModal isOpen={isQuizOpen} $background>
        <Suspense fallback={<QuizComponentSkeleton />}>
          <QuizModal close={() => setIsQuizOpen(false)} />
        </Suspense>
      </LegacyModal>
    </S.BackStage>
  );
};

export default Adventure;
