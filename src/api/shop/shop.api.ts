import customAxios from "@src/libs/axios/customAxios";
import { CardpackResponse } from "@src/types/shop/cardpack.type";

class ShopApi {
  public async getCardpack(): Promise<CardpackResponse> {
    const { data } = await customAxios.get("/store/cardpack");
    return data.data;
  }

  public async purchaseCardpackById(id: number) {
    const { data } = await customAxios.patch(`/store/cardBuy/${id}`);
    return data.data;
  }
}

export default new ShopApi();
