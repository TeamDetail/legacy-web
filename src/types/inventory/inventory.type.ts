export interface ItemType {
  itemId: number;
  itemType: ItemEnumType;
  itemName: string;
  itemDescription: string;
  itemCount: number;
}

enum ItemEnumType {
  CARD_PACK = "CARD_PACK",
}

export interface Mail {
  mailTitle: string;
  mailContent: string;
  sendAt: string;
  itemData: ItemType[];
}
