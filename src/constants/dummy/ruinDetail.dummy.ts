import { RuinDetail } from "@src/types/map/ruin.type";

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

export const ruinDetailDummy: RuinDetailDummy[] = [
  {
    ruinsId: 1011,
    ruinsImage:
      "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
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
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
        username: "dksgusdn",
        creationDate: "2025-07-24",
        content: "rkfrkfrkf아먑",
        rating: 7,
      },
      {
        reviewId: 2,
        profileImg:
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
        username: "dksgusdn",
        creationDate: "2025-07-24",
        content: "rkfrkfrkf아먑",
        rating: 2,
      },
      {
        reviewId: 3,
        profileImg:
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
        username: "dksgusdn",
        creationDate: "2025-07-24",
        content: "rkfrkfrkf아먑",
        rating: 9,
      },
      {
        reviewId: 4,
        profileImg:
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
        username: "dksgusdn",
        creationDate: "2025-07-24",
        content: "rkfrkfrkf아먑",
        rating: 4,
      },
      {
        reviewId: 5,
        profileImg:
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
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
          "https://i.pinimg.com/1200x/95/88/56/95885653a91f089014686d27565cbd3e.jpg",
        cardType: "SHINING_CARD",
        nationAttributeName: "대한민국",
        lineAttributeName: "신앙",
        regionAttributeName: "전북",
      },
    ],
  },
];
