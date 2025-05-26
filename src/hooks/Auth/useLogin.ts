import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/token.constants";
import token from "@src/libs/token/token";
import { TokenType } from "@src/types/Auth/TokenResponse.type";
import { BaseResponse } from "@src/types/globalType/global.type";
import axios from "axios";
import CONFIG from "@src/config/config.json";
import { useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useLogin = async (code: string | null, navigate: NavigateFunction) => {
  try {
    const { data } = await axios.post<BaseResponse<TokenType>>(
      `${CONFIG.server}/kakao/code`,
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
