import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="app/*" element={<MainLayout />} />
        <Route path="/" element={<Navigate to="auth/*" />} />
      </Routes>
    </div>
  );
}

export default App;
