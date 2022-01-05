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
      <div>
        <span
          style={{
            color: "#007bfc",
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: "Roboto, Arial",
          }}
        >
          NEWS:{" "}
        </span>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <div style={{ padding: "3px 20px 0px 0px" }}>
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
        </div>
      </div>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={["hover", "click"]}
        arrow
        overlayClassName={"navbar-dropdown"}
      >
        <div
          style={{
            fontSize: "17px",
            color: "#8692b0",
            paddingRight: "30px",
          }}
        >
          <i
            className="fas fa-user-circle"
            style={{ marginLeft: "20px", marginRight: "15px" }}
          ></i>
          <span className="user_Name">Mr.Alex</span>
          <span style={{ position: "absolute", paddingTop: "3px" }}>
            <MdKeyboardArrowDown />
          </span>
        </div>
      </Dropdown>
    </div>
  );
}

export default AppNavbar;
