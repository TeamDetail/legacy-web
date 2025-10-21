import { ItemType } from "../inventory/inventory.type";

export interface DailyData {
  id: number;
  name: "string";
  startAt: "2025-10-21";
  endAt: "2025-10-21";
  awards: ItemType[][];
  checkCount: number;
  check: boolean;
}