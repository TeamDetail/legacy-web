import { GOOGLE_MAP_API_KEY } from "@src/constants/googleMaps/googleMaps";
import useMapPixel from "@src/hooks/map/useMapPixel";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import Pixel from "../Pixel";

const MapComponent = () => {
  const map = useMap();
  const mapPixel = useMapPixel();
  const [currentZoomLevel, setCurrentZoomLevel] = useState<number>(16);

  useEffect(() => {
    if (!map) return;

    map.setOptions({
      keyboardShortcuts: false,
      clickableIcons: false,
      scrollwheel: true,
      gestureHandling: "greedy",
    });

    const dragListner = map.addListener("dragend", () => {
      const zoomLevel = map.getZoom();
      if (zoomLevel! >= 13) {
        // 현재 보여지는 지도 중심이랑 좌상단, 우하단 구하기
        const mapBounds = map.getBounds();

        const topRightLatLng = mapBounds?.getNorthEast();
        const bottomLeftLatlng = mapBounds?.getSouthWest();

        const topLeft = {
          lat: topRightLatLng!.lat(),
          lng: topRightLatLng!.lng(),
        };

        const bottomRight = {
          lat: bottomLeftLatlng!.lat(),
          lng: bottomLeftLatlng!.lng(),
        };

        if (mapBounds) {
          const cornerLatLng = {
            bottomRightLatLng: topLeft,
            topLeftLatLng: bottomRight,
          };
          mapPixel.getRuin(cornerLatLng);
        }
      }
    });

    const zoomListner = map.addListener("idle", () => {
      const zoomLevel = map.getZoom();

      setCurrentZoomLevel(zoomLevel!);
    });

    const style = document.createElement("style");
    style.textContent = `
      .gm-style-cc, 
      .gmnoprint, 
      .gm-style .gm-style-cc,
      .gm-style .gm-style-mtc,
      .gm-bundled-control,
      .gm-bundled-control-on-bottom {
        display: none !important;
      }
      .gm-style a[href*="maps.google.com"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      zoomListner.remove();
      dragListner.remove();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [map]);

  return (
    <>
      {mapPixel.ruins &&
        mapPixel.ruins.map((item) => {
          const zoomLevel = map?.getZoom();

          return (
            zoomLevel! >= 13 && (
              <Pixel
                ruinsId={item.ruinsId}
                key={item.ruinsId}
                latitude={item.latitude}
                longitude={item.longitude}
                currentZoomLevel={currentZoomLevel}
                pixelType="ruin"
              />
            )
          );
        })}
    </>
  );
};

const GoogleMap = () => {
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
        <MapComponent />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
