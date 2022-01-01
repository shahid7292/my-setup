import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { appRoutes } from "../routes";
import cookieService from "../services/cookies.js";

function MainLayout() {
  const isTokenAvailable = cookieService().isTokenAvailable();
  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: "130px" }}>
        <button
          onClick={() => {
            cookieService().clearToken();
            document.location.reload(true);
          }}
        >
          Logout
        </button>
        <div>
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
                  <Navigate to="home" />
                ) : (
                  <Navigate to="/auth/login" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
