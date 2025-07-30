import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Adventure from "@src/pages/Adventure";
import ProfilePage from "@src/pages/ProfilePage";
import NotFoundPage from "@src/pages/NotFoundPage";
import RankingPage from "@src/pages/RankingPage";
import YetMakingPage from "@src/pages/YetMakingPage";
import AchievementPage from "@src/pages/AchievementPage";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Adventure/>} />
        <Route path="/login" element={<Login isVerifyingPage={false}/>} />
        <Route path="/login/verify" element={<Login isVerifyingPage/>} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/adventure" element={<Adventure/>} />
        <Route path="/trial" element={<YetMakingPage type="시련"/>}/>
        <Route path="/shop" element={<YetMakingPage type="상점"/>}/>
        <Route path="/ranking" element={<RankingPage />}/>
        <Route path="/achievement" element={<AchievementPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </QueryClientProvider>
  );
};

export default Router;
