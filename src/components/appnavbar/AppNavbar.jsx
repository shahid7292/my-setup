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
      <div style={{ display: "flex", alignItems: "center" }}>
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

      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <div
          onClick={() => {
            navigate("/app/support");
          }}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip placement="bottom" title={text}>
            <i
              className="fas fa-envelope link-to-supprt"
              style={{
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
            display: "flex",
            alignItems: "baseline",
            paddingTop: "4px",
          }}
        >
          <i
            className="fas fa-user-circle"
            style={{ marginLeft: "20px", marginRight: "15px" }}
          ></i>
          <span
            className="user_Name"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Mr.Alex
          </span>
          <span style={{ position: "relative" }}>
            <span style={{ position: "absolute", top: "-17px" }}>
              <MdKeyboardArrowDown />
            </span>
          </span>
        </div>
      </Dropdown>
    </div>
  );
}

export default AppNavbar;
