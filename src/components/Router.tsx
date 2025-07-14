import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import ProfilePage from "@src/pages/ProfilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login isVerifyingPage={false}/>} />
      <Route path="/login/verify" element={<Login isVerifyingPage/>} />
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
  );
};

export default Router;
