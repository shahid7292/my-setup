import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/app");
  };

  return (
    <div className="login-container">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <p>
        Register <Link to="/auth/register">Here</Link>
      </p>
    </div>
  );
}

export default Login;
