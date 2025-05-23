import token from "@src/libs/token/token";
import { TokenType } from "@src/types/Auth/TokenResponse.type";
import axios from "axios";
import { useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const useLogin = async (code: string | null, navigate: NavigateFunction) => {
  try {
    console.log(code);
    const { data } = await axios.post<TokenType>(
      "https://9335-221-168-22-205.ngrok-free.app/kakao/code",
      { code: code }
    );
    if (data) {
      token.setToken("ACCESS_TOKEN", data.accessToken);
      token.setToken("REFRESH_TOKEN", data.refreshToken);
      navigate("/");
    }
  } catch (err: any) {
    console.log(err);
    alert("로그인 실패! 다시 시도해주세요.");
    navigate("/login");
  }
};

export default useLogin;
