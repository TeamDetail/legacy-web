import { Route, Routes } from "react-router-dom";
import Sidebar from "./common/Sidebar";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Sidebar/>}
      />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/login/verify" element={<Verify />} /> */}
    </Routes>
  );
};

export default Router;
