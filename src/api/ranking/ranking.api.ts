import customAxios from "@src/libs/axios/customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";
import { ExploreRankingType, LevelRankingType, TrialRankingType } from "@src/types/ranking/ranking.type";

class RankingApi {
  public async getTrialRanking(
    scope: "all" | "friend"
  ): Promise<BaseResponse<TrialRankingType[]>> {
    const { data } = await customAxios.get(`/ranklist/trial/${scope}`);
    return data;
  }

  public async getLevelRanking(
    scope: "all" | "friend"
  ): Promise<BaseResponse<LevelRankingType[]>> {
    const { data } = await customAxios.get(`/ranklist/level/${scope}`);
    return data;
  }

  public async getExploreRanking(
    scope: "all" | "friend"
  ): Promise<BaseResponse<ExploreRankingType[]>> {
    const { data } = await customAxios.get(`/ranklist/explore/${scope}`);
    return data;
  }
}

export default new RankingApi();
