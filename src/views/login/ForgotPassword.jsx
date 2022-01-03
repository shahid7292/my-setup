import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "./login.scss";
function Register() {
  const [email, setEmail] = useState("");
  const handleRegister = () => {};

  return (
    <div>
      <div className="login-form-container">
        <Card className="login-form-card">
          <div className="login-form-header">Forgot Password</div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<HiOutlineMail style={{ fontSize: "20px" }} />}
          />
          <Button
            onClick={handleRegister}
            style={{ width: "100%", backgroundColor: "#007bfc" }}
          >
            Retrieve Password
          </Button>
        </Card>
      </div>
      <div className="login-link-text">
        <p>
          <Link to="/auth/login" style={{ textDecoration: "none" }}>
            {"Back To Login"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
