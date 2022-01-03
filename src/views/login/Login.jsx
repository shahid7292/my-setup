import React, { useState } from "react";
import { Input, Button } from "reactstrap";
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
      <div>
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
        <Button onClick={handleLogin}>Login</Button>
      </div>
      <p>
        {"Don't have an account yet?"}{" "}
        <Link to="/auth/register" style={{ textDecoration: "none" }}>
          {"Sign Up"}
        </Link>
      </p>
    </div>
  );
}

export default Login;
