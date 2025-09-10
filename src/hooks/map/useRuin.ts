import {
  useGetCourseByName,
  useGetRuinDetail,
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
  const [allRuinsCache, setAllRuinsCache] = useState<Map<number, Ruin>>(
    new Map()
  );
  const [dedupeRuins, setDedupeRuins] = useState<Ruin[][]>([]);
  const [searchName, setSearchName] = useState<string>("");

  const {
    data: ruinDetail,
    refetch: getRuinDetail,
    isLoading: isRuinDetailLoading,
  } = useGetRuinDetail(ruinId!, { enabled: !!ruinId });
  const { data: ruins, refetch: getRuins } = useGetRuins(cornerLatLng!, {
    enabled: !!cornerLatLng,
  });
  const {
    data: ruinsByName,
    refetch: refetchRuinsByName,
    isFetching: isRuinsByNameFetching,
  } = useGetCourseByName(searchName, {
    enabled: !!searchName,
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
  const getRuinsByName = (name: string) => {
    setSearchName(name);
  };

  useEffect(() => {
    if (searchName) {
      refetchRuinsByName();
    }
  }, [searchName]);

  useEffect(() => {
    if (ruinId !== null) {
      getRuinDetail();
    }
  });

  useEffect(() => {
    if (cornerLatLng) {
      getRuins();
    }
  }, [cornerLatLng]);

  useEffect(() => {
    if (ruins) {
      setAllRuinsCache((prev) => {
        const newCache = new Map(prev);
        ruins.forEach((ruin) => {
          newCache.set(ruin.ruinsId, ruin);
        });

        return newCache;
      });
    }
  }, [ruins]);

  useEffect(() => {
    const allCachedRuins = Array.from(allRuinsCache.values());
    if (allCachedRuins.length > 0) {
      setDedupeRuins(groupByCoordinates(allCachedRuins));
    }
  }, [allRuinsCache]);

  return {
    isRuinsByNameFetching,
    getRuinDetailById,
    ruins,
    getRuin,
    ruinDetail,
    ruinId,
    dedupeRuins,
    isRuinDetailLoading,
    getRuinsByName,
    ruinsByName,
  };
};

export default useRuin;
