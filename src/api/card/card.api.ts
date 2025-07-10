import customAxios from "@src/libs/axios/customAxios";
import { CardResponse } from "@src/types/card/card.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class CardApi {
  public async getCardByRegion(region: string): Promise<BaseResponse<CardResponse[]>> {
    const { data } = await customAxios.get(`/card/collect/${region}`);
    return data;
  }
}

export default new CardApi();