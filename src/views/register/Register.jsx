import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
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
  );
}

export default Register;
