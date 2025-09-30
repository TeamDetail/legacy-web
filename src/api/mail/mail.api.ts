import customAxios from "@src/libs/axios/customAxios";
import { ItemType, Mail } from "@src/types/inventory/inventory.type";

class MailApi {
  public async getMailApi(): Promise<Mail[]> {
    const { data } = await customAxios.get("/mail");
    return data.data;
  }

  public async getAllReward(): Promise<ItemType[]> {
    const { data } = await customAxios.post("/mail/allGet");
    return data.data;
  }
}

export default new MailApi();
