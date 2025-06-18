import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Verify from "@src/pages/Auth/Verify";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/verify" element={<Verify />} />
    </Routes>
  );
};

export default Router;
