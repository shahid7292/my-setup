import React, { useState } from "react";
import { Input, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";
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
          />
          <Button onClick={handleRegister}>Retrieve Password</Button>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
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
