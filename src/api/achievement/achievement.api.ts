import customAxios from "@src/libs/axios/customAxios";
import { Achievement, AchievementAward, AchievementType } from "@src/types/Achievement/achievement.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class AchievementApi {
  public async getAchievementByType(type: AchievementType): Promise<BaseResponse<Achievement[]>> {
    const { data } = await customAxios.get(`/achievement/${type}`);
    return data;
  }

  public async getAchievementAward(): Promise<BaseResponse<AchievementAward>> {
    const { data } = await customAxios.post("/achievement/award");
    return data;
  }
}

export default new AchievementApi();