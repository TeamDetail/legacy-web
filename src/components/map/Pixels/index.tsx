import useBlock from "@src/hooks/map/useBlock";
import useRuin from "@src/hooks/map/useRuin";
import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import Pixel from "../Pixel";

const Pixels = () => {
  const map = useMap();
  const { myRuinBlock } = useBlock();
  const { getRuin, getRuinDetailById, dedupeRuins } = useRuin();
  const [currentZoomLevel, setCurrentZoomLevel] = useState<number>(16);

  useEffect(() => {
    if (!map) return;

    map.setOptions({
      keyboardShortcuts: false,
      clickableIcons: false,
      scrollwheel: true,
      gestureHandling: "greedy",
    });

    const dragListner = map.addListener("idle", () => {
      const zoomLevel = map.getZoom();
      if (zoomLevel! >= 13) {
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
          getRuin(cornerLatLng);
        }
      }
    });

    const zoomListner = map.addListener("idle", () => {
      const zoomLevel = map.getZoom();
      setCurrentZoomLevel(zoomLevel!);
    });

    return () => {
      zoomListner.remove();
      dragListner.remove();
    };
  }, [map]);

  return (
    <>
      {dedupeRuins &&
        dedupeRuins.map((item) => {
          const zoomLevel = map?.getZoom();

          return (
            zoomLevel! >= 13 && (
              <Pixel
                ruins={item}
                currentZoomLevel={currentZoomLevel}
                pixelType="ruin"
                handleClick={() => {
                  getRuinDetailById(item);
                }}
                myRuinBlock={myRuinBlock}
              />
            )
          );
        })}
    </>
  );
};

export default Pixels;
