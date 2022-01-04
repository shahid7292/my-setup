import React, { useState } from "react";
import { Input, Button, Card, Form } from "antd";

import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "./login.scss";
function Register() {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const handleRegister = () => {};

  return (
    <div>
      <div className="login-form-container">
        <Card className="login-form-card">
          <div className="login-form-header">Forgot Password</div>
          <Form form={form}>
            <Form.Item>
              <Input
                type={"email"}
                prefix={<HiOutlineMail style={{ fontSize: "20px" }} />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>
          </Form>
          <Button onClick={handleRegister} block type="primary">
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
