import customAxios from "@src/libs/axios/customAxios";
import { CardResponse, DeckCount } from "@src/types/card/card.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class CardApi {
  public async getAllDeck(): Promise<BaseResponse<Record<DeckCount, CardResponse[]>>> {
    const { data } = await customAxios.get("/card/deck");
    return data
  }
}

export default new CardApi();