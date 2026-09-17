import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import MyWork from "./screen/MyWork";
import AboutME from "./screen/AboutMe";
import NotFound from "./screen/NotFound";
import Layout from "./Layout/Layout";
import Resource from "./screen/Resource";
import "./app.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutME />} />
          <Route path="myWork" element={<MyWork />} />
          <Route path="resources" element={<Resource />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
