import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_asj from './pages/Ahnsangjun/Main/Main_asj';
import Main_khj from './pages/Kimhojoon/Main/Main_khj';
import Main_ksj from './pages/Kusujeong/Main/Main_ksj';
import Main_pmy from './pages/Parkmoonyoung/Main/Main_pmy';
import Main_wsm from './pages/Woosukmin/Main/Main_wsm';
import Login_asj from './pages/Ahnsangjun/Login/Login_asj';
import Login_khj from './pages/Kimhojoon/Login/Login_khj';
import Login_ksj from './pages/Kusujeong/Login/Login_ksj';
import Login_pmy from './pages/Parkmoonyoung/Login/Login_pmy';
import Login_wsm from './pages/Woosukmin/Login/Login_wsm';

import './styles/reset.scss';
import './styles/commons.scss';

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
