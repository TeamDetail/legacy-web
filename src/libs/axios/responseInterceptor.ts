import axios, { AxiosError } from "axios";
import token from "../token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token.constants";
import customAxios from "./customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";
import { SERVER_URL } from "@src/constants/server.constants";

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

let isRefreshing = false;
const refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefeshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const ResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      status === 401 &&
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      !isRefreshing
    ) {
      isRefreshing = true;

      try {
        const { data } = await axios.post<BaseResponse<TokenResponse>>(
          `${SERVER_URL}/auth/refresh`,
          {
            refreshToken: usingRefreshToken,
          }
        ); //CHANGE YOUR API URL && BODY VALUE
        customAxios.defaults.headers.common[
          REQUEST_TOKEN_KEY
        ] = `Bearer ${data.data.accessToken}`;

        token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);

        isRefreshing = false;
        onTokenRefreshed(data.data.accessToken);

        return new Promise((resolve) => {
          addRefeshSubscriber((accessToken: string) => {
            originalRequest!.headers![
              REQUEST_TOKEN_KEY
            ] = `Bearer ${accessToken}`;
            resolve(customAxios(originalRequest!));
          });
        });
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        token.clearToken();
        window.alert("세션이 만료되었습니다.");
        window.location.href = "/login";
      }
    }
  }

  return Promise.reject(error);
};

export default ResponseHandler;
