import { Route, Routes } from "react-router-dom";
import LayoutContainer from "../components/templates";
import Home from "../pages/Home/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
