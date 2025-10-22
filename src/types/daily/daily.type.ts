import { ItemType } from "../inventory/inventory.type";

export interface DailyData {
  id: number;
  name: string;
  startAt: string;
  endAt: string;
  awards: ItemType[][];
  checkCount: number;
  check: boolean;
}
