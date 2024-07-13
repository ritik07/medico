import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutContainer from "../components/templates";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import CountriesSingle from "../pages/countries-single/countries-single";
import Countries from "../pages/countries/countries";
import Medical from "../pages/courses/medical/medical";
import Home from "../pages/Home/home";
import ScrollToTop from "../utils/scroll-to-top";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses/medical" element={<Medical />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countries/:page_name" element={<CountriesSingle />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
