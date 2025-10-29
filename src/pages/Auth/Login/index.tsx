import { useEffect } from "react";
import * as S from "./style";
import useLogin from "@src/hooks/Auth/useLogin";
import AppleLoginButton from "@components/auth/AppleLoginButton";
import GoogleLoginButton from "@components/auth/GoogleLoginButton";
import KakaoLoginButton from "@components/auth/KakaoLoginButton";

type LoginVerifyingProps = {
  verifyingType?: "KAKAO" | "APPLE" | "GOOGLE";
};

const Login = ({ verifyingType }: LoginVerifyingProps) => {

  const createQueryParams = (hash: string) => new URLSearchParams(hash);

  const { kakaoLogin, appleLogin, googleLogin } = useLogin();
  useEffect(() => {
    if (verifyingType === "KAKAO") {
      const code = new URL(document.location.toString()).searchParams.get(
        "code"
      );
      kakaoLogin(code);
    } else if (verifyingType === "APPLE") {
      const hash = window.location.hash.substring(1);
      const queryParams: URLSearchParams = createQueryParams(hash);
      const id_token = queryParams.get("id_token");
      const code = queryParams.get("code");

      appleLogin(id_token!, code!);
    } else if (verifyingType === "GOOGLE") {
      const hash = window.location.search.substring(1);
      const queryParams: URLSearchParams = createQueryParams(hash);
      const code = queryParams.get("code");

      googleLogin(code!);
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
            <S.LoginButtonContainer>
              <KakaoLoginButton isVerifying={verifyingType === "KAKAO"}/>
              <GoogleLoginButton isVerifying={verifyingType === "GOOGLE"} />
              <AppleLoginButton isVerifying={verifyingType === "APPLE"} />
            </S.LoginButtonContainer>
          </S.Column20>
        </S.Center>
      </S.LoginBox>
    </S.Container>
  );
};

export default Login;
