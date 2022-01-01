import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { authRoutes } from "../routes.js";
import cookieservices from "../services/cookies.js";

function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if (cookieservices().isTokenAvailable()) {
      navigate("/app");
    }
  }, [navigate]);
  return (
    <div>
      <Routes>
        {authRoutes.map((route, index) => {
          return (
            <Route path={route.path} element={route.component()} key={index} />
          );
        })}
        <Route path="*" replace element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
}

export default AuthLayout;
