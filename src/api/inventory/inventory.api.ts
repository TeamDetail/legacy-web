import customAxios from "@src/libs/axios/customAxios";
import { CardResponse } from "@src/types/card/card.type";
import {
  CreditPackResponse,
  ItemType,
} from "@src/types/inventory/inventory.type";

class InventoryApi {
  public async getMyInventory(): Promise<ItemType[]> {
    const { data } = await customAxios.get("/inventory");
    return data.data;
  }

  public async openCardpack(
    id: number,
    count: number
  ): Promise<CardResponse[]> {
    const { data } = await customAxios.post("/inventory/cardpack", {
      cardpackId: id,
      count,
    });
    return data.data;
  }

  public async openCreditpack(
    id: number,
    count: number
  ): Promise<CreditPackResponse> {
    const { data } = await customAxios.post("/inventory/credit-pack/use", {
      creditpackId: id,
      count
    });
    return data.data;
  }
}

export default new InventoryApi();
