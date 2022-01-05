import React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import Logo from "../../assets/images/brand/logo_small.2043544169.svg";

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
          display: "flex",
          justifyContent: "center",
          padding: "20px 0px",
        }}
      >
        <div style={{ width: "50px" }}>
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
      <div style={{}}>{createLinks()}</div>
    </div>
  );
};

export default Sidebar;
