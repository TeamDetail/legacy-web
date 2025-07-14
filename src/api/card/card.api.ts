import customAxios from "@src/libs/axios/customAxios";
import { CardResponse, RegionAttributeType } from "@src/types/card/card.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class CardApi {
  public async getCardByRegion(region: RegionAttributeType): Promise<BaseResponse<CardResponse[]>> {
    const { data } = await customAxios.get(`/card/collection/${region}`);
    return data;
  }
}

export default new CardApi();