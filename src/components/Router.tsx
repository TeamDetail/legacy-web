import TrialPage from "@src/pages/TrialPage";
import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Adventure from "@src/pages/Adventure";
import ProfilePage from "@src/pages/ProfilePage";
import NotFoundPage from "@src/pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Adventure />} />
      <Route path="/trial" element={<TrialPage />} />
      <Route path="/login" element={<Login isVerifyingPage={false} />} />
      <Route path="/login/verify" element={<Login isVerifyingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
