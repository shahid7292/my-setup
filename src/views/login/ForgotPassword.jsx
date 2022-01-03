import React, { useState } from "react";
import { Input, Button } from "reactstrap";

function Register() {
  const [email, setEmail] = useState("");
  const handleRegister = () => {};

  return (
    <div>
      <div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleRegister}>Retrieve Password</Button>
      </div>
    </div>
  );
}

export default Register;
