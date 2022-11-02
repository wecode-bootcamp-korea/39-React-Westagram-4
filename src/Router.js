import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_asj from "./pages/Ahnsangjun/Main/Main";
import Main_khj from "./pages/Kimhojoon/Main/Main";
import Main_ksj from "./pages/Kusujeong/Main/Main";
import Main_pmy from "./pages/Parkmoonyoung/Main/Main";
import Main_wsm from "./pages/Woosukmin/Main/Main";
import Login_asj from "./pages/Ahnsangjun/Login/Login";
import Login_khj from "./pages/Kimhojoon/Login/Login";
import Login_ksj from "./pages/Kusujeong/Login/Login";
import Login_pmy from "./pages/Parkmoonyoung/Login/Login";
import Login_wsm from "./pages/Woosukmin/Login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_asj />} />
        <Route path="/main_asj" element={<Main_asj />} />
        <Route path="/login_khj" element={<Login_khj />} />
        <Route path="/main_khj" element={<Main_khj />} />
        <Route path="/login_ksj" element={<Login_ksj />} />
        <Route path="/main_ksj" element={<Main_ksj />} />
        <Route path="/login_pmy" element={<Login_pmy />} />
        <Route path="/main_pmy" element={<Main_pmy />} />
        <Route path="/login_wsm" element={<Login_wsm />} />
        <Route path="/main_wsm" element={<Main_wsm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
