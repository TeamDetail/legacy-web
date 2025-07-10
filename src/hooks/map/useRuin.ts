import {
  useGetRuinDetail,
  useGetRuinQuiz,
  useGetRuins,
} from "@src/queries/map/map.queries";
import { CornerLatLngType } from "@src/types/map/latLng.type";
import { useEffect, useState } from "react";

const useRuin = () => {
  const [ruinId, setRuinId] = useState<number | null>(null);
  const [cornerLatLng, setConerLatLng] = useState<CornerLatLngType | null>(
    null
  );

  const { data: ruinDetail, refetch: getRuinDetail } = useGetRuinDetail(
    ruinId!
  );
  const { data: ruins, refetch: getRuins } = useGetRuins(cornerLatLng!, {
    enabled: !!cornerLatLng,
  });
  const { data: ruinQuiz, refetch: getRuinQuiz } = useGetRuinQuiz(ruinId!);

  const getRuinDetailById = (id: number) => {
    setRuinId(id);
  };
  const getRuin = (cornerLatLng: CornerLatLngType) => {
    setConerLatLng(cornerLatLng);
  };
  const getRuinQuizById = (id: number) => {
    setRuinId(id);
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
    ruinQuiz,
  };
};

export default useRuin;
