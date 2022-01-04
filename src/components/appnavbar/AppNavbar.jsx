import React from "react";
import "./appnavbar.scss";
import cookieService from "../../services/cookies.js";
import { Menu, Dropdown, Tooltip } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

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
      <Menu theme="light" mode="horizontal">
        <Menu.Item>
          <span
            style={{
              color: "#007bfc",
              fontSize: "12px",
              marginLeft: "-20px",
              fontWeight: "bold",
            }}
          >
            NEWS:{" "}
          </span>
        </Menu.Item>

        <Menu.Item style={{ marginLeft: "auto" }}>
          <Tooltip placement="bottom" title={text}>
            <Link to="support">
              <i
                className="fas fa-envelope"
                style={{
                  marginRight: "-20px",
                  color: "#8692b0",
                  fontSize: "20px",
                }}
              ></i>
            </Link>
          </Tooltip>
        </Menu.Item>

        <Dropdown
          overlay={menu}
          placement="bottomRight"
          trigger={["hover", "click"]}
          arrow
        >
          <Menu.Item
            style={{ fontSize: "17px", color: "#8692b0", paddingLeft: "0px" }}
          >
            <i
              className="fas fa-user-circle"
              style={{ marginLeft: "20px", marginRight: "15px" }}
            ></i>
            <span className="user_Name">Mr.Alex</span>
            <span style={{ position: "absolute", paddingTop: "3px" }}>
              <MdKeyboardArrowDown />
            </span>
          </Menu.Item>
        </Dropdown>
      </Menu>
    </div>
  );
}

export default AppNavbar;
