import TrialPage from "@src/pages/TrialPage";
import { Route, Routes } from "react-router-dom";
import Login from "@src/pages/Auth/Login";
import Verify from "@src/pages/Auth/Verify";
import Adventure from "@src/pages/Adventure";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Adventure/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/login/verify" element={<Verify />} />
      <Route path="/trial" element={<TrialPage />} />
    </Routes>
  );
};

export default Router;
