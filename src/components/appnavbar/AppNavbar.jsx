/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./appnavbar.scss";
import cookieService from "../../services/cookies.js";
import { Menu, Dropdown, Tooltip } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          navigate("/app/account");
        }}
      >
        Profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        onClick={() => {
          cookieService().clearToken();
          navigate("/auth/login");
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
        <div
          style={{ padding: "4px 20px 0px 0px" }}
          onClick={() => {
            navigate("/app/support");
          }}
        >
          <Tooltip placement="bottom" title={text}>
            <i
              className="fas fa-envelope link-to-supprt"
              style={{
                marginRight: "-20px",
                color: "#8692b0",
                fontSize: "20px",
              }}
            ></i>
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
