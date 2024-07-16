import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { UploadVideos } from "../pages/UploadVideos";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<UploadVideos />} path="/upload"/>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterApp;
