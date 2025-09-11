import { Mail } from "@src/types/inventory/inventory.type";

export const mailDummy: Mail[] = [
  {
    mailTitle: "출석 보상",
    mailContent: "오늘도 접속해주셔서 감사합니다!",
    sendAt: "2025-09-01T09:00:00Z",
    itemData: [
      {
        itemId: 1,
        itemType: "CARD_PACK",
        itemName: "스타터 카드 팩",
        itemDescription: "기본 카드들이 들어있는 팩",
        itemCount: 1,
      },
    ],
  },
  {
    mailTitle: "주간 미션 완료",
    mailContent: "주간 미션 달성 보상 지급입니다!",
    sendAt: "2025-09-02T18:30:00Z",
    itemData: [
      {
        itemId: 2,
        itemType: "CARD_PACK",
        itemName: "레어 카드 팩",
        itemDescription: "레어 등급 이상의 카드가 확정 포함된 팩",
        itemCount: 2,
      },
    ],
  },
  {
    mailTitle: "시즌 이벤트 보상",
    mailContent: "시즌 이벤트 참여 보상입니다!",
    sendAt: "2025-09-03T12:00:00Z",
    itemData: [
      {
        itemId: 3,
        itemType: "CARD_PACK",
        itemName: "이벤트 카드 팩",
        itemDescription: "한정 이벤트 카드가 들어있는 팩",
        itemCount: 3,
      },
    ],
  },
  {
    mailTitle: "업데이트 기념",
    mailContent: "신규 업데이트를 기념하여 보상 드립니다!",
    sendAt: "2025-09-04T08:00:00Z",
    itemData: [
      {
        itemId: 4,
        itemType: "CARD_PACK",
        itemName: "스페셜 카드 팩",
        itemDescription: "다양한 카드가 들어있는 특별한 팩",
        itemCount: 1,
      },
    ],
  },
  {
    mailTitle: "길드 출석 보상",
    mailContent: "길드원들과 함께 출석 체크 완료!",
    sendAt: "2025-09-05T07:30:00Z",
    itemData: [
      {
        itemId: 5,
        itemType: "CARD_PACK",
        itemName: "길드 카드 팩",
        itemDescription: "길드 이벤트로만 얻을 수 있는 카드 팩",
        itemCount: 1,
      },
    ],
  },
  {
    mailTitle: "랭킹 보상",
    mailContent: "주간 랭킹 보상 지급입니다!",
    sendAt: "2025-09-06T21:00:00Z",
    itemData: [
      {
        itemId: 6,
        itemType: "CARD_PACK",
        itemName: "프리미엄 카드 팩",
        itemDescription: "상위 랭커들에게 지급되는 특별한 카드 팩",
        itemCount: 2,
      },
    ],
  },
  {
    mailTitle: "친구 초대 보상",
    mailContent: "친구 초대 이벤트 참여 보상입니다!",
    sendAt: "2025-09-07T14:15:00Z",
    itemData: [
      {
        itemId: 7,
        itemType: "CARD_PACK",
        itemName: "초대 카드 팩",
        itemDescription: "친구 초대 이벤트로만 얻는 카드 팩",
        itemCount: 1,
      },
    ],
  },
  {
    mailTitle: "버그 보상",
    mailContent: "게임 이용 불편에 대한 사과 보상입니다!",
    sendAt: "2025-09-08T11:00:00Z",
    itemData: [
      {
        itemId: 8,
        itemType: "CARD_PACK",
        itemName: "사과 카드 팩",
        itemDescription: "운영팀에서 지급하는 특별 보상 팩",
        itemCount: 2,
      },
    ],
  },
  {
    mailTitle: "신규 유저 환영",
    mailContent: "게임에 오신 것을 환영합니다!",
    sendAt: "2025-09-09T10:00:00Z",
    itemData: [
      {
        itemId: 9,
        itemType: "CARD_PACK",
        itemName: "웰컴 카드 팩",
        itemDescription: "신규 유저를 위한 웰컴 보너스 카드 팩",
        itemCount: 5,
      },
    ],
  },
  {
    mailTitle: "핫타임 이벤트",
    mailContent: "핫타임 접속 보상 지급입니다!",
    sendAt: "2025-09-10T20:00:00Z",
    itemData: [
      {
        itemId: 10,
        itemType: "CARD_PACK",
        itemName: "핫타임 카드 팩",
        itemDescription: "핫타임에만 얻을 수 있는 카드 팩",
        itemCount: 1,
      },
    ],
  },
];
