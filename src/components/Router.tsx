import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Adventure from "@src/pages/Adventure";
import ProfilePage from "@src/pages/ProfilePage";
import NotFoundPage from "@src/pages/NotFoundPage";
import RankingPage from "@src/pages/RankingPage";
import YetMakingPage from "@src/pages/YetMakingPage";
import CoursePage from "@src/pages/CoursePage";
import CourseDetail from "./course/CourseDetail";
import CreateCoursePage from "@src/pages/CreateCoursePage";
import ShopPage from "@src/pages/ShopPage/idnex";
import AchievementPage from "@src/pages/AchievementPage";
import OverView from "@components/profile/OverView";
import Inventory from "@components/profile/Inventory";
import Codex from "@components/profile/Codex";
import ProfileFix from "@components/profile/ProfileFix";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Adventure />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/kakao/verify" element={<Login verifyingType="KAKAO" />} />
      <Route path="/profile" element={<ProfilePage />}>
        <Route path="" element={<OverView />} />
        <Route path="overview" element={<OverView />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="codex" element={<Codex />} />
        <Route path="fix" element={<ProfileFix />} />
      </Route>
      <Route path="/trial" element={<YetMakingPage type="시련" />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/achievement" element={<AchievementPage />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/course/create" element={<CreateCoursePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
