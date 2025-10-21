export interface ItemType {
  itemId: number;
  itemType: ItemEnumType;
  itemName: string;
  itemDescription: string;
  itemCount: number;
}

export type ItemEnumType = "CARD_PACK" | "CREDIT_PACK";

export interface Mail {
  mailTitle: string;
  mailContent: string;
  sendAt: string;
  itemData: ItemType[];
}

export interface CreditPackResponse {
  addedCredit: number;
  userTotalCredit: number;
}
