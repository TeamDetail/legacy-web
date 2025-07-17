import customAxios from "@src/libs/axios/customAxios";
import { MyBlockType } from "@src/types/map/normalBlock.type";

class BlockApi {
  public async getMyBlock(): Promise<MyBlockType[]> {
    const { data } = await customAxios("/block/user/me");
    return data.data;
  }
}

export default new BlockApi();
