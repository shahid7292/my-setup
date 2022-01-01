import React from "react";
import "./appnavbar.scss";
import cookieService from "../../services/cookies.js";

function AppNavbar() {
  return (
    <div className="app-navbar-main">
      App Navbar{" "}
      <button
        onClick={() => {
          cookieService().clearToken();
          document.location.reload(true);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default AppNavbar;
