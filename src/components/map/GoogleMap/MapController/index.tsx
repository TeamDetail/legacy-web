import { LatLng } from "@src/types/map/latLng.type";
import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

const MapController = ({ center, zoom }: { center: LatLng; zoom: number }) => {
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

export default MapController;
