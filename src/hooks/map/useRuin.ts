import {
  useGetRuinDetail,
  useGetRuinQuiz,
  useGetRuins,
} from "@src/queries/map/map.queries";
import { CornerLatLngType } from "@src/types/map/latLng.type";
import { Ruin, RuinDetail } from "@src/types/map/ruin.type";
import { useEffect, useState } from "react";

interface RuinDetailDummy extends RuinDetail {
  review: ReviewType[];
  rating: number;
  ratingCount: number;
  detail: string;
  explorerCount: number;
  explorerRatio: number;
}

interface ReviewType {
  reviewId: number;
  profileImg: string;
  username: string;
  creationDate: string;
  content: string;
  rating: number;
}

const useRuin = () => {
  const [ruinId, setRuinId] = useState<number | null>(null);
  const [cornerLatLng, setConerLatLng] = useState<CornerLatLngType | null>(
    null
  );
  const [dedupeRuins, setDedupeRuins] = useState<Ruin[][]>([]);
  const ruinDetailDummy: RuinDetailDummy[] = [
    {
      ruinsId: 1011,
      ruinsImage:
        "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa11d028316cf6a5b45c3e7537d23044123855cea53f7a6aff19ee0a6451442d400423febc6fe0964beda98371576095a9fbdb2e33b592b67e62758f6260f6356c34619fb1e9adca547b654d7037118bef11",
      category: "사적",
      name: "갸루 누나.jpg",
      chineseName: "갸루짱깨",
      englishName: "gyaru",
      location: "dc 싱글벙글 갤러리",
      detailAddress: "대구광역시 북구 구암동 ",
      periodName: "근현대사",
      specifiedDate: "2025-07-24",
      owner: "카와키타 사이카",
      manager: "아야츠노 유니",
      latitude: 43.3154315,
      longitude: 162.34123161,
      rating: 7,
      ratingCount: 302,
      detail:
        "갸루(ギャル)는 일본의 1990~2000년대 유행한 하위문화로, 밝은 갈색 머리, 진한 화장, 개성 있는 패션을 특징으로 합니다. 전통적인 여성상에서 벗어나 자유롭고 당당한 태도를 지향하는 스타일입니다.",
      explorerCount: 20132,
      explorerRatio: 46,
      review: [
        {
          reviewId: 1,
          profileImg:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa1bd6253104bb44157be50e63058663be38f5c229ab034d799cc7b9d8ef24c8c470a133e28682deebd0c44f99637238bb8a8b9eb5855bcfefb9f5d2412cfbf5cfd5",
          username: "dksgusdn",
          creationDate: "2025-07-24",
          content: "rkfrkfrkf아먑",
          rating: 7,
        },
        {
          reviewId: 2,
          profileImg:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa1bd6253104bb44157be50e63058663be38f5c229ab034d799cc7b9d8ef24c8c470a133e28682deebd0c44f99637238bb8a8b9eb5855bcfefb9f5d2412cfbf5cfd5",
          username: "dksgusdn",
          creationDate: "2025-07-24",
          content: "rkfrkfrkf아먑",
          rating: 2,
        },
        {
          reviewId: 3,
          profileImg:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa1bd6253104bb44157be50e63058663be38f5c229ab034d799cc7b9d8ef24c8c470a133e28682deebd0c44f99637238bb8a8b9eb5855bcfefb9f5d2412cfbf5cfd5",
          username: "dksgusdn",
          creationDate: "2025-07-24",
          content: "rkfrkfrkf아먑",
          rating: 9,
        },
        {
          reviewId: 4,
          profileImg:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa1bd6253104bb44157be50e63058663be38f5c229ab034d799cc7b9d8ef24c8c470a133e28682deebd0c44f99637238bb8a8b9eb5855bcfefb9f5d2412cfbf5cfd5",
          username: "dksgusdn",
          creationDate: "2025-07-24",
          content: "rkfrkfrkf아먑",
          rating: 4,
        },
        {
          reviewId: 5,
          profileImg:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa1bd6253104bb44157be50e63058663be38f5c229ab034d799cc7b9d8ef24c8c470a133e28682deebd0c44f99637238bb8a8b9eb5855bcfefb9f5d2412cfbf5cfd5",
          username: "dksgusdn",
          creationDate: "2025-07-24",
          content: "rkfrkfrkf아먑",
          rating: 5,
        },
      ],
      cards: [
        {
          cardId: 523,
          cardName: "갸루 누나",
          cardImageUrl:
            "https://dcimg8.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa11d028316cf6a5b45c3e7537d23044123855cea53f7a6aff19ee0a6451442d400423febc6fe0964beda98371576095a9fbdb2e33b592b67e62758f6260f6356c34619fb1e9adca547b654d7037118bef11",
          cardType: "SHINING_CARD",
          nationAttributeName: "대한민국",
          lineAttributeName: "신앙",
          regionAttributeName: "전북",
        },
      ],
    },
  ];

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
    if (ruinId !== null) {
      getRuinDetail();
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
    ruinDetailDummy,
    isRuinDetailLoading,
  };
};

export default useRuin;
