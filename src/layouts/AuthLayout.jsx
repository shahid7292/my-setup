import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes } from "../routes.js";

function AuthLayout() {
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
