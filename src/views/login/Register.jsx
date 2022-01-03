import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import "./login.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/auth/login");
    toast.success("Registered Successfully Please Login");
  };

  return (
    <div>
      <div className="login-form-container">
        <Card className="login-form-card">
          <div className="login-form-header">Create Account</div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<HiOutlineMail style={{ fontSize: "20px" }} />}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            prefix={<RiLockPasswordLine style={{ fontSize: "20px" }} />}
          />
          <Button
            onClick={handleRegister}
            style={{ width: "100%", backgroundColor: "#007bfc" }}
          >
            Register
          </Button>
        </Card>
      </div>
      <div className="login-link-text">
        <p>
          {"Already a member? "}
          <Link to="/auth/login" style={{ textDecoration: "none" }}>
            {"Log In"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
