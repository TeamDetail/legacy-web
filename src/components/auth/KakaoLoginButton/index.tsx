import KakaoImg from "@src/assets/loginButtonSvg/kakao.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { KAKAO_REST_API_KEY } from "@src/constants/auth/auth.constants";

const KakaoLoginButton = ({ isVerifying }: { isVerifying: boolean }) => {
  const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=https://legacygame.site/login/kakao/verify&response_type=code`;

  const loginWithKakao = async () => (window.location.href = AUTH_URL);

  return (
    <KakaoLoginButtonContainer onClick={loginWithKakao}>
      <KakaoImg width={14} height={14} />
      <p>카카오 로그인 {isVerifying && "중..."}</p>
    </KakaoLoginButtonContainer>
  );
};

export default KakaoLoginButton;

const KakaoLoginButtonContainer = styled.button`
  width: 100%;
  height: 32px;
  background-color: #fee500;
  border-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  cursor: pointer;

  > p {
    ${LegacyTypography.Pretendard.Caption2.Medium}
    flex: 1;
    color: #000;
  }
`;
