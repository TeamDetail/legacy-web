import customAxios from "@src/libs/axios/customAxios";
import { ExploreRankingType, LevelRankingType, TrialRankingType } from "@src/types/ranking/ranking.type";

class RankingApi {
  public async getTrialRanking(
    scope: "all" | "friend"
  ): Promise<TrialRankingType[]> {
    const { data } = await customAxios.get(`/ranklist/trial/${scope}`);
    return data.data;
  }

  public async getLevelRanking(
    scope: "all" | "friend"
  ): Promise<LevelRankingType[]> {
    const { data } = await customAxios.get(`/ranklist/level/${scope}`);
    return data.data;
  }

  public async getExploreRanking(
    scope: "all" | "friend"
  ): Promise<ExploreRankingType[]> {
    const { data } = await customAxios.get(`/ranklist/explore/${scope}`);
    return data.data;
  }
}

export default new RankingApi();
