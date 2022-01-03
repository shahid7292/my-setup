import React, { useState } from "react";
import { Input, Button, Card } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import cookieServices from "../../services/cookies.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email == "test@example.com" && password == "123456") {
      navigate("/app");
      cookieServices().setAppToken({ access: "abcde" });
      toast.success("Logged in Successfully");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="login-form-container">
        <Card className="login-form-card">
          <div className="login-form-header">Welcome Back</div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <div className="forgot-password-link">
            <Link to="/auth/forgot-password" style={{ textDecoration: "none" }}>
              {"Forgot password?"}
            </Link>
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </Card>
      </div>
     
    </div>
  );
}

export default Login;
