import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
