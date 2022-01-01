import React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

import "./sidebar.scss";
import { sidebarRoutes } from "../../routes.js";
const Sidebar = () => {
  const createLinks = () => {
    return (
      <div>
        {sidebarRoutes.map((route, index) => {
          return (
            <NavItem key={index}>
              <NavLinkRRD
                to={`/app/${route.path}`}
                className={({ isActive }) =>
                  `sidebar-option  ${isActive ? "active-sidebar" : ""}`
                }
              >
                {route.name}
              </NavLinkRRD>
            </NavItem>
          );
        })}
      </div>
    );
  };
  return (
    <Navbar expand="md" id="sidenav-main">
      <Nav navbar style={{ marginLeft: "-12px" }}>
        {createLinks()}
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
