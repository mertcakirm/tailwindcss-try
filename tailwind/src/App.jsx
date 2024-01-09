import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Mainpage";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
