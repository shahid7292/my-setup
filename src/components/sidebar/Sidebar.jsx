import React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";

import "./sidebar.scss";
import { sidebarRoutes } from "../../routes.js";
const Sidebar = () => {
  const createLinks = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
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
      <div>{createLinks()}</div>
    </div>
  );
};

export default Sidebar;
