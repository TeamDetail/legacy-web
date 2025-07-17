import customAxios from "@src/libs/axios/customAxios";
import { Ruin, RuinDetail } from "@src/types/map/ruin.type";

class RuinApi {
  public async getRuins(
    minLat: number,
    minLng: number,
    maxLat: number,
    maxLng: number
  ): Promise<Ruin[]> {
    const { data } = await customAxios.get("/ruins/map", {
      params: {
        minLat: minLat,
        minLng: minLng,
        maxLat: maxLat,
        maxLng: maxLng,
      },
    });
    return data.data;
  }

  public async getRuinDetail(id: number): Promise<RuinDetail> {
    const { data } = await customAxios.get(`/ruins/${id}`);
    return data.data;
  }
}

export default new RuinApi();
