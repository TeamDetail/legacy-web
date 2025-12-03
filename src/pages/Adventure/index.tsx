import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";
import { useEffect, useState } from "react";
import { Ruin } from "@src/types/map/ruin.type";
import { LatLng } from "@src/types/map/latLng.type";
import Info from "@src/assets/info.svg?react";
import useBlock from "@src/hooks/map/useBlock";
import AdventureMenu from "./AdventureMenu";

const Adventure = () => {
  const [selectedRuins, setSelectedRuins] = useState<Ruin[] | null>(null);
  const [center, setCenter] = useState<LatLng>({ lat: 35.8722, lng: 128.6025 });
  const [zoomLevel, setZoomLevel] = useState<number>(11);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  const handleSelectRuin = (ruin: Ruin) => {
    setSelectedRuins([ruin]);
    setCenter({ lat: ruin.latitude, lng: ruin.longitude });
    setZoomLevel(15);
  };

  const { myRuinBlock } = useBlock();

  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap
          setSelectedRuins={setSelectedRuins}
          center={center}
          zoomLevel={zoomLevel}
          myRuinBlock={myRuinBlock}
          setIsWarning={setIsWarning}
        />
      </S.GoogleMapWrapper>
      <S.Container>
        <Sidebar />
      </S.Container>
      <S.InfoWrapper>
        <AdventureMenu handleSelectRuin={handleSelectRuin} />
        {selectedRuins && (
          <TileInfo selectedRuins={selectedRuins} myRuinBlock={myRuinBlock} />
        )}
      </S.InfoWrapper>
      {isWarning && (
        <S.WarningMessageWrapper>
          <Info />
          <p>
            데이터를 불러오려면
            <br />
            지도를 더 확대시켜주세요.
          </p>
        </S.WarningMessageWrapper>
      )}
    </S.BackStage>
  );
};

export default Adventure;
