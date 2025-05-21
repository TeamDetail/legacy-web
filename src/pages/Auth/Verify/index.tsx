import React, { useEffect } from "react";
import * as S from "./style";
import axios from "axios";
import { REDIRECT_URI, REST_API_KEY } from "@src/constants/kakao/kakao";
import { Router, useNavigate, useRoutes } from "react-router-dom";
import useEffectOnce from "@src/hooks/useEffectOnce";

interface KakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

const Verify = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    const useGetToken = async () => {
      try {
        const payload = new URLSearchParams();
        payload.append("grant_type", "authorization_code");
        payload.append("client_id", REST_API_KEY);
        payload.append("redirect_uri", REDIRECT_URI);
        payload.append("code", code || "");

        const data = await axios.post<KakaoToken>(
          "https://kauth.kakao.com/oauth/token",
          payload,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (data) {
          localStorage.setItem("ACCESS_TOKEN", data.data.access_token);
          localStorage.setItem("REFRESH_TOKEN", data.data.refresh_token);
          navigate("/");
        }
      } catch (err: any) {
        console.log(err);
      }
    };

    useEffectOnce(() => {
      useGetToken();
    });
  }, []);

  return (
    <S.Container>
      <S.LoginBox>
        <S.ImgBox>
          <S.Gradient />
          <S.LoginImage />
        </S.ImgBox>
        <S.Center>
          <S.Column20>
            <S.Column12>
              <S.Column>
                <S.Normal14>게임과 함께하는 우리 문화와 역사</S.Normal14>
                <S.Normal48>Legacy</S.Normal48>
              </S.Column>
              <S.Body2Bold>소셜 로그인하고 곧바로 뛰어드세요!</S.Body2Bold>
            </S.Column12>
            <S.LoginButton>
              <S.KakaoIcon />
              <S.LoginButtonText>카카오 로그인...</S.LoginButtonText>
            </S.LoginButton>
          </S.Column20>
        </S.Center>
      </S.LoginBox>
    </S.Container>
  );
};

export default Verify;
