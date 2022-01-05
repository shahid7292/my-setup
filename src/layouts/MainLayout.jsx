import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import cookieService from "../services/cookies.js";
import { appRoutes } from "../routes";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import AppNavbar from "../components/appnavbar/AppNavbar.jsx";
import "./mainlayout.scss";

function MainLayout() {
  const isTokenAvailable = cookieService().isTokenAvailable();
  return (
    <div>
      <Sidebar />
      <AppNavbar />
      <div className="main-content">
        <Routes>
          {appRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={
                  isTokenAvailable ? (
                    route.component()
                  ) : (
                    <Navigate to="/auth/login" />
                  )
                }
                key={index}
              />
            );
          })}
          <Route
            path="*"
            replace
            element={
              isTokenAvailable ? (
                <Navigate to="products" />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;
