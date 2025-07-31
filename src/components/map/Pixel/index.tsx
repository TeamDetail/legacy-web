import { LegacySementic } from "@src/constants/color/color";
import { MyBlockType } from "@src/types/map/normalBlock.type";
import { Ruin } from "@src/types/map/ruin.type";
import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

interface PixelProps {
  ruins: Ruin[];
  currentZoomLevel: number;
  pixelType: "ruin" | "normal" | "buyable";
  handleClick: (ruin: Ruin[]) => void;
  myRuinBlock: MyBlockType[];
}

const Pixel = ({
  ruins,
  currentZoomLevel,
  pixelType,
  handleClick,
  myRuinBlock,
}: PixelProps) => {
  const map = useMap();

  const latitude = ruins[0].latitude;
  const longitude = ruins[0].longitude;

  const latPerPixel = 0.000724;
  const lonPerPixel = 0.000909;

  const defaultStrokeWidthToLatitude = 0.00000905;
  const defaultStrokeWidthToLongitude = 0.0000113625;

  const defaultZoomLevel = 11.0;

  const koreaTopLeftCorner = {
    lat: 43.00268544185012,
    lng: 124.27407423789127,
  };

  const zoomScale =
    currentZoomLevel !== undefined
      ? Math.pow(2, defaultZoomLevel - currentZoomLevel!)
      : 1;
  const strokeWidthToLat = defaultStrokeWidthToLatitude * zoomScale;
  const strokeWidthToLng = defaultStrokeWidthToLongitude * zoomScale;

  const getLatLag = (lat: number, lng: number) => {
    return new google.maps.LatLng(lat, lng);
  };

  const subX = Math.floor((latitude - koreaTopLeftCorner.lat) / latPerPixel);
  const subY = Math.floor((longitude - koreaTopLeftCorner.lng) / lonPerPixel);

  const sortedX = koreaTopLeftCorner.lat + latPerPixel * subX;
  const sortedY = koreaTopLeftCorner.lng + lonPerPixel * subY;

  const getRectangleFromLatLng = (topLeftPoint: {
    lat: number;
    lng: number;
  }) => {
    return [
      getLatLag(
        topLeftPoint.lat - strokeWidthToLat,
        topLeftPoint.lng + strokeWidthToLng
      ),
      getLatLag(
        topLeftPoint.lat - strokeWidthToLat,
        topLeftPoint.lng + lonPerPixel - strokeWidthToLng
      ),
      getLatLag(
        topLeftPoint.lat - latPerPixel + strokeWidthToLat,
        topLeftPoint.lng + lonPerPixel - strokeWidthToLng
      ),
      getLatLag(
        topLeftPoint.lat - latPerPixel + strokeWidthToLat,
        topLeftPoint.lng + strokeWidthToLng
      ),
    ];
  };

  useEffect(() => {
    if (!map) return;

    const paths = getRectangleFromLatLng({ lat: sortedX, lng: sortedY });

    const polygon = new google.maps.Polygon({
      paths: paths,
      strokeColor:
        pixelType === "ruin"
          ? myRuinBlock.some((ruinBlock) => ruinBlock.ruinsId === ruinsId)
            ? LegacySementic.yellow.normal
            : LegacySementic.purple.normal
          : pixelType === "buyable"
          ? LegacySementic.red.normal
          : LegacySementic.purple.normal,
      strokeOpacity: 0,
      strokeWeight: 2,
      fillColor:
        pixelType === "ruin"
          ? myRuinBlock.some((ruinBlock) => ruinBlock.ruinsId === ruinsId)
            ? LegacySementic.yellow.netural
            : LegacySementic.purple.netural
          : pixelType === "buyable"
          ? LegacySementic.red.netural
          : LegacySementic.purple.netural,
      fillOpacity: 0,
    });

    polygon.setMap(map);

    const animateOpacity = (duration = 125) => {
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const targetFill = 0.75;
        const targetStroke = 0.75;

        polygon.setOptions({
          fillOpacity: targetFill * progress,
          strokeOpacity: targetStroke * progress,
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animateOpacity(); // 실행

    const clickListener = polygon.addListener("click", () => {
      handleClick(ruins);
    });

    // 정리 함수
    return () => {
      polygon.setMap(null);
      google.maps.event.removeListener(clickListener);
    };
  }, [map]);

  return null;
};

export default Pixel;
