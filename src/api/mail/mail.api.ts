import customAxios from "@src/libs/axios/customAxios";
import { Mail } from "@src/types/inventory/inventory.type";

class MailApi {
  public async getMailApi(): Promise<Mail[]> {
    const { data } = await customAxios.get("/mail");
    return data.data;
  }
}

export default new MailApi();
