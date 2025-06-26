import { User } from "@src/types/user/user.type";
import customAxios from "@src/libs/axios/customAxios";
import { TrialStateRequest } from "@src/types/trial/trial.type";
import { BaseResponse } from "@src/types/globalType/global.type";

class TrialApi {
  public async patchTrial(params: TrialStateRequest) {
    await customAxios.patch(`/trial`, params);
  }

  public async getTrial(): Promise<BaseResponse<User>> {
    const { data } = await customAxios.get("/trial/status");
    return data
  }
}

export default new TrialApi();