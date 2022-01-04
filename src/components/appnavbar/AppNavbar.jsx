import React from "react";
import "./appnavbar.scss";
import cookieService from "../../services/cookies.js";
import { Layout, Menu, Dropdown, Tooltip } from "antd";

function AppNavbar() {
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Divider />
      <Menu.Item
        onClick={() => {
          cookieService().clearToken();
          document.location.reload(true);
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  const text = <span>View Tickets</span>;
  return (
    <div className="app-navbar-main">
      <Layout>
        <Menu theme="light" mode="horizontal">
          <Menu.Item>
            <span
              style={{
                color: "#007bfc",
                fontSize: "12px",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
            >
              NEWS:{" "}
            </span>
          </Menu.Item>

          <Menu.Item style={{ marginLeft: "auto" }}>
            <Tooltip placement="bottom" title={text}>
              <i className="fas fa-envelope"></i>
            </Tooltip>
          </Menu.Item>
          <Menu.Item>
            <i className="fas fa-user-circle"></i>
          </Menu.Item>

          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Menu.Item style={{ fontSize: "17px", color: "#8692b0" }}>
              Mr.Alex
            </Menu.Item>
          </Dropdown>
        </Menu>
      </Layout>
    </div>
  );
}

export default AppNavbar;
