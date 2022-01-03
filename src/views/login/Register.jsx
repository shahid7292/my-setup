import React, { useState } from "react";
import { Input, Button, Card } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
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
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleRegister}>Register</Button>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
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
