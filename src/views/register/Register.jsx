import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div>
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
        <Button
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Register
        </Button>
      </div>

      <p>
        {"Already a member? "}
        <Link to="/auth/login" style={{ textDecoration: "none" }}>
          {"Log In"}
        </Link>
      </p>
    </div>
  );
}

export default Register;
