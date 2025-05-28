import { Route, Routes } from "react-router-dom";
import Sidebar from "./common/Sidebar";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Sidebar/>}
      />
    </Routes>
  );
};

export default Router;
