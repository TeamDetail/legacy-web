import customAxios from "@src/libs/axios/customAxios";
import { CardResponse } from "@src/types/card/card.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class CardApi {
  public async getAllDeck(): Promise<BaseResponse<CardResponse[][]>> {
    const { data } = await customAxios.get("/card/deck");
    return data
  }
}

export default new CardApi();