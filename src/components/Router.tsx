import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import ProfilePage from "@src/pages/ProfilePage";
import NotFoundPage from "@src/pages/NotFoundPage";
import RankingPage from "@src/pages/RankingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login isVerifyingPage={false}/>} />
      <Route path="/login/verify" element={<Login isVerifyingPage/>} />
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/ranking" element={<RankingPage />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default Router;
