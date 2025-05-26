import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/token.constants";
import cookies from "../cookie/cookie";

class Token {
  public getToken(key: string): string | undefined {
    return cookies.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookies.setCookie(key, token);
  }

  public clearToken() {
    cookies.removeCookie(ACCESS_TOKEN_KEY);
    cookies.removeCookie(REFRESH_TOKEN_KEY);
  }
}
const token = new Token();
export default token;
