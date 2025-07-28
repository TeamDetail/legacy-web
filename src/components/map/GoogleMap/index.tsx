import { GOOGLE_MAP_API_KEY } from "@src/constants/googleMaps/googleMaps";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Pixels from "../Pixels";
import { Ruin } from "@src/types/map/ruin.type";
import { Dispatch, SetStateAction } from "react";

const GoogleMap = ({
  setSelectedRuins,
}: {
  setSelectedRuins: Dispatch<SetStateAction<Ruin[] | null>>;
}) => {
  return (
    <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
      <Map
        defaultCenter={{ lat: 35.8722, lng: 128.6025 }}
        defaultZoom={11}
        style={{ width: "100%", height: "100%" }}
        mapId="727d2114ec023eee68cb4b4d"
        disableDefaultUI
        zoomControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        maxZoom={16}
      >
        <Pixels setSelectedRuins={setSelectedRuins} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
