import { GOOGLE_MAP_API_KEY } from "@src/constants/googleMaps/googleMaps";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import Pixels from "../Pixels";
import { Ruin } from "@src/types/map/ruin.type";
import { Dispatch, SetStateAction, useEffect } from "react";
import { LatLng } from "@src/types/map/latLng.type";
import { MyBlockType } from "@src/types/map/normalBlock.type";

const MapConroller = ({ center, zoom }: { center: LatLng; zoom: number }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.panTo(center);
    }
  }, [center, map]);

  useEffect(() => {
    if (map) {
      map.setZoom(zoom);
    }
  }, [zoom, map]);

  return null;
};

const GoogleMap = ({
  setSelectedRuins,
  center,
  zoomLevel,
  myRuinBlock
}: {
  setSelectedRuins: Dispatch<SetStateAction<Ruin[] | null>>;
  center: LatLng;
  zoomLevel: number;
  myRuinBlock: MyBlockType[];
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
        defaultZoom={zoomLevel}
      >
        <MapConroller center={center} zoom={zoomLevel} />
        <Pixels setSelectedRuins={setSelectedRuins} myRuinBlock={myRuinBlock} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
