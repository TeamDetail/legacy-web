import { AppleLoginButtonContainer } from "@components/auth/AppleLoginButton/style";
import Apple from "@src/assets/loginButtonSvg/apple.svg?react"
import { APPLE_CLIENT_ID } from "@src/constants/auth/auth.constants";
// import { useEffect } from "react";

const AppleLoginButton = () => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.AppleID?.auth?.init) {
  //     window.AppleID.auth.init({
  //       clientId: `${APPLE_CLIENT_ID}`,
  //       scope: "name",
  //       redirectURI: "https://legacygame.site/login/apple/verify",
  //       state: "",
  //       usePopup: false,
  //     });
  //   }
  // }, []);

  const RESPONSE_TYPE = "code id_token"; // 요청하는 응답 타입
  const RESPONSE_MODE = "fragment";

  const AUTH_URL =
    `https://appleid.apple.com/auth/authorize?` +
    `client_id=${encodeURIComponent(APPLE_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(
      "https://legacygame.site/login/apple/verify"
    )}` +
    `&response_type=${encodeURIComponent(RESPONSE_TYPE)}` +
    `&response_mode=${encodeURIComponent(RESPONSE_MODE)}` +
    `&scope=${encodeURIComponent("")}` +
    `&state=${encodeURIComponent("previewInsure")}` +
    `&nonce=${encodeURIComponent("821")}`;

  const loginWithApple = async () => {
    // try {
    //   const res = await window.AppleID?.auth.signIn();
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    window.location.href = AUTH_URL;
  };
  return (
    <AppleLoginButtonContainer onClick={loginWithApple}>
      <Apple width={14} height={14} />
      <p>Apple 로그인</p>
    </AppleLoginButtonContainer>
  );
};

export default AppleLoginButton;
