import React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";

import "./sidebar.scss";
import { sidebarRoutes } from "../../routes.js";
const Sidebar = () => {
  const createLinks = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {sidebarRoutes.map((route, index) => {
          return (
            <NavLinkRRD
              to={`/app/${route.path}`}
              className={({ isActive }) =>
                `sidebar-option  ${isActive ? "active-sidebar" : ""}`
              }
              key={index}
            >
              {route.name}
            </NavLinkRRD>
          );
        })}
      </div>
    );
  };
  return (
    <div id="sidenav-main">
      <div
        style={{
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          color: "white",
        }}
      >
        Logo
      </div>
      <div style={{}}>{createLinks()}</div>
    </div>
  );
};

export default Sidebar;
