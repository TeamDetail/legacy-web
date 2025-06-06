import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/login/verify" element={<Verify />} /> */}
    </Routes>
  );
};

export default Router;
