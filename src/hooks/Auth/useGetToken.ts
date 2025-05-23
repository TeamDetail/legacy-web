// import { REDIRECT_URI, REST_API_KEY } from "@src/constants/kakao/kakao";
// import axios from "axios";

interface KakaoToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

// const useGetToken = async ({ code }: { code: string }) => {
//   try {
//     const payload = new URLSearchParams();
//     payload.append("grant_type", "authorization_code");
//     payload.append("client_id", REST_API_KEY);
//     payload.append("redirect_uri", REDIRECT_URI);
//     payload.append("code", code || "");

//     const data = await axios.post<KakaoToken>(
//       "https://kauth.kakao.com/oauth/token",
//       payload,
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );
//     if (data) {
//       localStorage.setItem("ACCESS_TOKEN", data.data.access_token);
//       localStorage.setItem("REFRESH_TOKEN", data.data.refresh_token);
//       navigate("/");
//     }
//   } catch (err: any) {
//     console.log(err);
//   }
// };

// export default useGetToken;
