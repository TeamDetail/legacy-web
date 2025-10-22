import { GOOGLE_MAP_API_KEY } from "@src/constants/googleMaps/googleMaps";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Pixels from "../Pixels";
import { Ruin } from "@src/types/map/ruin.type";
import { Dispatch, SetStateAction } from "react";
import { LatLng } from "@src/types/map/latLng.type";
import { MyBlockType } from "@src/types/map/normalBlock.type";
import MapController from "./MapController";

const GoogleMap = ({
  setSelectedRuins,
  center,
  zoomLevel,
  myRuinBlock,
  setIsWarning,
}: {
  setSelectedRuins: Dispatch<SetStateAction<Ruin[] | null>>;
  center: LatLng;
  zoomLevel: number;
  myRuinBlock: MyBlockType[];
  setIsWarning: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        defaultCenter={center}
        style={{ width: "100%", height: "100%" }}
        mapId="727d2114ec023eee68cb4b4d"
        disableDefaultUI
        zoomControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        maxZoom={16}
        defaultZoom={17}
      >
        <MapController center={center} zoom={zoomLevel} />
        <Pixels
          setSelectedRuins={setSelectedRuins}
          myRuinBlock={myRuinBlock}
          setIsWarning={setIsWarning}
        />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
