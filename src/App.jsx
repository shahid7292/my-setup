import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Toaster from "./components/toaster/Toaster.jsx";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="app/*" element={<MainLayout />} />
        <Route path="/" element={<Navigate to="auth/*" />} />
        <Route path="*" replace element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
}

export default App;
