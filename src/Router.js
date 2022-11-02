import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainAsj from './pages/Ahnsangjun/Main/MainAsj';
import MainKhj from './pages/Kimhojoon/Main/MainKhj';
import MainKsj from './pages/Kusujeong/Main/MainKsj';
import MainPmy from './pages/Parkmoonyoung/Main/MainPmy';
import MainWsm from './pages/Woosukmin/Main/MainWsm';
import LoginAsj from './pages/Ahnsangjun/Login/LoginAsj';
import LoginKhj from './pages/Kimhojoon/Login/LoginKhj';
import LoginKsj from './pages/Kusujeong/Login/LoginKsj';
import LoginPmy from './pages/Parkmoonyoung/Login/LoginPmy';
import LoginWsm from './pages/Woosukmin/Login/LoginWsm';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAsj />} />
        <Route path="/mainasj" element={<MainAsj />} />
        <Route path="/loginkhj" element={<LoginKhj />} />
        <Route path="/mainkhj" element={<MainKhj />} />
        <Route path="/loginksj" element={<LoginKsj />} />
        <Route path="/mainksj" element={<MainKsj />} />
        <Route path="/loginpmy" element={<LoginPmy />} />
        <Route path="/mainpmy" element={<MainPmy />} />
        <Route path="/loginwsm" element={<LoginWsm />} />
        <Route path="/mainwsm" element={<MainWsm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
