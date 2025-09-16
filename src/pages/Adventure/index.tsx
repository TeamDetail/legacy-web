import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import { LegacyModal } from "@components/common/LegacyModal";
import { useState } from "react";
import { Ruin } from "@src/types/map/ruin.type";
import SearchRuinsModal from "@components/map/SearchRuinsModal";
import { LatLng } from "@src/types/map/latLng.type";
import Search from "@src/assets/search.svg?react";
import useBlock from "@src/hooks/map/useBlock";

const Adventure = () => {
  const [selectedRuins, setSelectedRuins] = useState<Ruin[] | null>(null);
  const [isSearchRuinsOpen, setIsSearchRuinsOpen] = useState<boolean>(false);
  const [center, setCenter] = useState<LatLng>({ lat: 35.8722, lng: 128.6025 });
  const [zoomLevel, setZoomLevel] = useState<number>(11);

  const { myRuinBlock, getMyBlock } = useBlock();

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
          myRuinBlock={myRuinBlock}
        />
      </S.GoogleMapWrapper>
      <S.Container>
        <Sidebar />
      </S.Container>
      <S.InfoWrapper>
        <S.AdventureMenuContainer>
          <div onClick={() => setIsSearchRuinsOpen(true)}>
            <Search width={22} height={22} />
          </div>
        </S.AdventureMenuContainer>
        {selectedRuins && (
          <TileInfo
            selectedRuins={selectedRuins}
            myRuinBlock={myRuinBlock}
            getMyBlock={getMyBlock}
          />
        )}
      </S.InfoWrapper>
      <LegacyModal isOpen={isSearchRuinsOpen} $background>
        <SearchRuinsModal
          close={() => setIsSearchRuinsOpen(false)}
          onSelectRuin={handleSelectRuin}
        />
      </LegacyModal>
    </S.BackStage>
  );
};

export default Adventure;
