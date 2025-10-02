import { AppleLoginButtonContainer } from "@components/auth/AppleLoginButton/style";
import Apple from "@src/assets/loginButtonSvg/apple.svg?react"
import { APPLE_CLIENT_ID } from "@src/constants/auth/auth.constants";
import { useEffect } from "react";

const AppleLoginButton = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AppleID?.auth?.init) {
      window.AppleID.auth.init({
        clientId: `${APPLE_CLIENT_ID}`,
        scope: "name",
        redirectURI: "https://legacygame.site/login/apple/verify",
        state: "",
        usePopup: false,
      });
    }
  }, []);

  const loginWithApple = async () => {
    console.log("sign in with apple");
    try {
      const res = await window.AppleID?.auth.signIn();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppleLoginButtonContainer onClick={loginWithApple}>
      <Apple width={14} height={14} />
      <p>Apple 로그인</p>
    </AppleLoginButtonContainer>
  );
};

export default AppleLoginButton;
