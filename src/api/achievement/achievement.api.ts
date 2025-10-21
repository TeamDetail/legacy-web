import customAxios from "@src/libs/axios/customAxios";
import { Achievement, AchievementAwardResponse, AchievementValueType } from "@src/types/achievement/achievement.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class AchievementApi {
  public async getAchievement(
    type: AchievementValueType
  ): Promise<BaseResponse<Achievement[]>> {
    const { data } = await customAxios.get(`/achievement/${type}`);
    return data;
  }

  public async getAchievementAward(): Promise<AchievementAwardResponse> {
    const { data } = await customAxios.post(`/achievement/award`);
    return data.data;
  }
}

export default new AchievementApi();
