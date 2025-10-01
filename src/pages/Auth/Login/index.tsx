import { useEffect } from "react";
import * as S from "./style";
import { REDIRECT_URI, REST_API_KEY } from "@src/constants/kakao/kakao";
import useLogin from "@src/hooks/Auth/useLogin";
import { useNavigate } from "react-router-dom";
import AppleLoginButton from "@components/auth/AppleLoginButton";
import KakaoImg from "@src/assets/loginButtonSvg/kakao.svg?react";

type LoginVerifyingProps = {
  verifyingType?: "KAKAO" | "APPLE" | "GOOGLE"
}

const Login = ({ verifyingType }: LoginVerifyingProps) => {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (verifyingType === "KAKAO") {
      const code = new URL(document.location.toString()).searchParams.get("code");
      useLogin(code, navigate);
    } else if (verifyingType === "APPLE") {
      console.log(window.location)
    }
  }, [verifyingType]);

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
            {!verifyingType ? (
              <S.LoginButtonContainer>
                <S.LoginButton onClick={handleLogin}>
                  <KakaoImg />
                  <p>카카오 로그인</p>
                </S.LoginButton>
                <AppleLoginButton />
              </S.LoginButtonContainer>
            ) : (
              <S.LoginButton>
                <KakaoImg />
                <p>카카오 로그인 중...!</p>
              </S.LoginButton>
            )}
          </S.Column20>
        </S.Center>
      </S.LoginBox>
    </S.Container>
  );
};

export default Login;
