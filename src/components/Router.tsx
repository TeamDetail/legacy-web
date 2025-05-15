import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/challenge">
        <Route path="ingame"/>
      </Route>
    </Routes>
  );
};

export default Router;
