export interface Item {
  itemId: number;
  itemType: ItemType;
  itemName: string;
  itemDescription: string;
  itemCount: number;
}

type ItemType = "CARD_PACK";

export interface Mail {
  mailTitle: string;
  mailContent: string;
  sendAt: string;
  itemData: Item[];
}
