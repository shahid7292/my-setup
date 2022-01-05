import React, { useState } from "react";
import { Input, Button, Card, Form } from "antd";

import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import "./forgotPassword.scss";
function Register() {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const handleRegister = () => {};

  return (
    <div>
      <div className="forgotPassword-form-container">
        <Card className="forgotPassword-form-card">
          <div className="forgotPassword-form-header">Forgot Password</div>
          <div className="forgotPassword-box-text">
            Enter your email address to retrieve your password
          </div>
          <Form form={form}>
            <Form.Item>
              <Input
                placeholder="Email Address"
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
