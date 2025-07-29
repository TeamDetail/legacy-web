import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Adventure from "@src/pages/Adventure";
import ProfilePage from "@src/pages/ProfilePage";
import NotFoundPage from "@src/pages/NotFoundPage";
import RankingPage from "@src/pages/RankingPage";
import YetMakingPage from "@src/pages/YetMakingPage";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Adventure/>} />
      <Route path="/adventure" element={<Adventure/>} />
      <Route path="/login" element={<Login isVerifyingPage={false}/>} />
      <Route path="/login/verify" element={<Login isVerifyingPage/>} />
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/trial" element={<YetMakingPage type="시련"/>}/>
      <Route path="/shop" element={<YetMakingPage type="상점"/>}/>
      <Route path="/ranking" element={<RankingPage />}/>
      <Route path="/achievement" element={<YetMakingPage type="도전과제"/>}/>
      <Route path="/course" element={<YetMakingPage type="코스"/>} />
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default Router;
