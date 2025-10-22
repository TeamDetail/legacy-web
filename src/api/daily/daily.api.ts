import customAxios from "@src/libs/axios/customAxios";
import { DailyData } from "@src/types/daily/daily.type";
import { ItemType } from "@src/types/inventory/inventory.type";

class DailyApi {
  public async getDailyData(): Promise<DailyData[]> {
    const { data } = await customAxios.get("/daily");
    return data.data;
  }

  public async getDailyReward(dailyId: number): Promise<ItemType[]> {
    const { data } = await customAxios.post(`/daily/${dailyId}`);
    return data.data;
  }
}

export default new DailyApi();
