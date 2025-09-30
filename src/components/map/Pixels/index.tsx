import useRuin from "@src/hooks/map/useRuin";
import { useMap } from "@vis.gl/react-google-maps";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Pixel from "../Pixel";
import { Ruin } from "@src/types/map/ruin.type";
import { MyBlockType } from "@src/types/map/normalBlock.type";

const Pixels = ({
  setSelectedRuins,
  myRuinBlock,
}: {
  setSelectedRuins: Dispatch<SetStateAction<Ruin[] | null>>;
  myRuinBlock: MyBlockType[];
}) => {
  const map = useMap();

  const { getRuin, dedupeRuins } = useRuin();
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
                key={item[0].ruinsId}
                ruins={item}
                currentZoomLevel={currentZoomLevel}
                pixelType="ruin"
                handleClick={(ruin: Ruin[]) => setSelectedRuins(ruin)}
                myRuinBlock={myRuinBlock}
              />
            )
          );
        })}
    </>
  );
};

export default Pixels;
