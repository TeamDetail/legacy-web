import { LegacyTypography } from "@src/constants/font/fontToken";
import Google from "@src/assets/loginButtonSvg/google.svg?react";
import styled from "styled-components";
import { GOOGLE_CLIENT_ID } from "@src/constants/auth/auth.constants";

const GoogleLoginButton = ({ isVerifying }: { isVerifying: boolean }) => {
  const AUTH_URL =
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(
      "https://legacygame.site/login/google/verify"
    )}` +
    `&scope=${encodeURIComponent("openid")}` +
    `&response_type=code`;

  const loginWithGoogle = async () => (window.location.href = AUTH_URL);

  return (
    <GoogleLoginButtonContainer onClick={loginWithGoogle}>
      <Google width={14} height={14} />
      <p>Google 로그인 {isVerifying && "중..."}</p>
    </GoogleLoginButtonContainer>
  );
};

export default GoogleLoginButton;

const GoogleLoginButtonContainer = styled.button`
  width: 100%;
  height: 32px;
  background-color: #fff;
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
