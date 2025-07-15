import axios, { AxiosRequestConfig } from "axios";
import requestInterceptor from "./requestInterceptor";
import ResponseHandler from "./responseInterceptor";
import Token from "../token/token";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "@src/constants/token.constants";
import { SERVER_URL } from "@src/constants/server.constants";
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
    withCredentials: true
  },
};

const customAxios = axios.create(axiosRequestConfig);

customAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

customAxios.interceptors.response.use((res) => res, ResponseHandler);

export default customAxios;

export const setAccessToken = (token: string) => {
  customAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
