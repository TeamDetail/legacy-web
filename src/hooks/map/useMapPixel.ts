import { useGetRuinDetail, useGetRuins } from "@src/queries/map/map.queries";
import { LatLng } from "@src/types/map/latLng.type";
import { useEffect, useState } from "react";

interface CornerLatLngType {
  topLeftLatLng: LatLng;
  bottomRightLatLng: LatLng;
}

const useMapPixel = () => {
  const [ruinId, setRuinId] = useState<number | null>(null);
  const [cornerLatLng, setConerLatLng] = useState<CornerLatLngType | null>(
    null
  );

  const { data: ruinDetail, refetch: getRuinDetail } = useGetRuinDetail(
    ruinId!
  );
  const { data: ruins, refetch: getRuins } = useGetRuins(
    cornerLatLng?.topLeftLatLng.lat ?? 0,
    cornerLatLng?.topLeftLatLng.lng ?? 0,
    cornerLatLng?.bottomRightLatLng.lat ?? 0,
    cornerLatLng?.bottomRightLatLng.lng ?? 0,
    {
      enabled: !!cornerLatLng,
    }
  );

  const getRuinDetailById = (id: number) => {
    setRuinId(id);
  };

  const getRuin = (cornerLatLng: CornerLatLngType) => {
    setConerLatLng(cornerLatLng);
  };

  useEffect(() => {
    if (ruinId) {
      getRuinDetail();
    }
  }, [ruinId]);

  useEffect(() => {
    if (cornerLatLng) {
      getRuins();
    }
  }, [cornerLatLng]);

  return {
    getRuinDetailById,
    ruins,
    getRuin,
    ruinDetail,
    ruinId,
  };
};

export default useMapPixel;
