import {
  useGetRuinDetail,
  useGetRuinQuiz,
  useGetRuins,
} from "@src/queries/map/map.queries";
import { CornerLatLngType } from "@src/types/map/latLng.type";
import { Ruin } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";



const useRuin = () => {
  const [ruinId, setRuinId] = useState<number | null>(null);
  const [cornerLatLng, setConerLatLng] = useState<CornerLatLngType | null>(
    null
  );
  const [alreadyLoadRuin, setAlreadyLoadRuin] = useState<number[]>([]);
  const [dedupeRuins, setDedupeRuins] = useState<Ruin[][]>([]);

  const {
    data: ruinDetail,
    refetch: getRuinDetail,
    isLoading: isRuinDetailLoading,
  } = useGetRuinDetail(ruinId!, { enabled: !!ruinId });
  const { data: ruins, refetch: getRuins } = useGetRuins(cornerLatLng!, {
    enabled: !!cornerLatLng,
  });
  const { data: ruinQuiz, refetch: getRuinQuiz } = useGetRuinQuiz(ruinId!, {
    enabled: !!ruinDetail?.ruinsId,
    suspense: true,
  });

  const groupByCoordinates = (ruins: Ruin[]): Ruin[][] => {
    return Object.values(
      ruins.reduce<Record<string, Ruin[]>>((acc, ruin) => {
        const key = `${ruin.latitude},${ruin.longitude}`;
        acc[key] = acc[key] ?? [];
        acc[key].push(ruin);
        return acc;
      }, {})
    );
  };

  const getRuinDetailById = (id: number) => {
    setRuinId(id);
  };
  const getRuin = (cornerLatLng: CornerLatLngType) => {
    setConerLatLng(cornerLatLng);
  };

  useEffect(() => {
    if (ruinId !== null && !alreadyLoadRuin.includes(ruinId)) {
      getRuinDetail();
      setAlreadyLoadRuin((prev) => [...prev, ruinId]);
    }
  }, [ruinId]);
  useEffect(() => {
    if (cornerLatLng) {
      getRuins();
    }
  }, [cornerLatLng]);
  useEffect(() => {
    if (ruins) {
      setDedupeRuins(groupByCoordinates(ruins!));
    }
  }, [ruins]);

  return {
    getRuinDetailById,
    ruins,
    getRuin,
    ruinDetail,
    ruinQuiz,
    ruinId,
    getRuinQuiz,
    dedupeRuins,
    isRuinDetailLoading,
  };
};

export default useRuin;
