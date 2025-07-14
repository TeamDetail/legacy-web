import { SERVER_URL } from "@src/constants/server.constants";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/token.constants";
import token from "@src/libs/token/token";
import { TokenType } from "@src/types/Auth/TokenResponse.type";
import { BaseResponse } from "@src/types/globalType/global.type";
import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const useLogin = async (code: string | null, navigate: NavigateFunction) => {
  try {
    const { data } = await axios.post<BaseResponse<TokenType>>(
      `/${SERVER_URL}/kakao/code`,
      {
        code: code,
      }
    );
    if (data) {
      token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
      token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
      navigate("/");
    }
  } catch (err: any) {
    console.log(err);
    alert("로그인 실패! 다시 시도해주세요.");
    navigate("/login");
  }
};

export default useLogin;
