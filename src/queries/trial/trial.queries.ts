import trialApi from "@src/api/trial/trial.api";
import { TrialStateRequest } from "@src/types/trial/trial.type"
import { useMutation } from "react-query"

export const useCreateRunMutation = () => {
  const mutation = useMutation((params: TrialStateRequest) => 
    trialApi.patchTrial(params)
  );
  return mutation
}