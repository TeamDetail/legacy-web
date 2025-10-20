import { SERVER_URL } from "@src/constants/server.constants";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/constants/token.constants";
import token from "@src/libs/token/token";
import { TokenType } from "@src/types/Auth/TokenResponse.type";
import { BaseResponse } from "@src/types/globalType/global.type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const kakaoLogin = async (
    code: string | null
  ) => {
    try {
      const { data } = await axios.post<BaseResponse<TokenType>>(
        `${SERVER_URL}/kakao/code`,
        {
          code: code,
        }
      );
      if (data) {
        token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
        navigate("/");
      }
    } catch {
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/login");
    }
  };

  const appleLogin = async (
    idToken: string,
    name: string
  ) => {
    try {
      const { data } = await axios.post(`${SERVER_URL}/apple/accessToken`, {
        idToken: idToken,
        name: name
      })
      if (data) {
        token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
        navigate("/");
      }
    } catch {
      console.log()
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/login");
    }
  }

  const googleLogin = async (code: string) => {
    try {
      const {data} = await axios.post(`${SERVER_URL}/google/web`, code)
      if (data) {
        token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);
        navigate("/")
      }
    } catch {
      console.log()
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/login");
    }
  }

  return {
    kakaoLogin,
    appleLogin,
    googleLogin
  }
};

export default useLogin;
