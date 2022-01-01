import React from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { appRoutes } from "../routes";

function MainLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: "130px" }}>
        <button
          onClick={() => {
            navigate("/auth", { replace: true });
          }}
        >
          Logout
        </button>
        <div>
          <Routes>
            {appRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={route.component()}
                  key={index}
                />
              );
            })}
            <Route path="*" replace element={<Navigate to="home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
