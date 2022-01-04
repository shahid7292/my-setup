import React, { useState } from "react";
import { Input, Button, Card, Form } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Validator from "validator";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import "./login.scss";

function Register() {
  const [form] = Form.useForm();
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
          <Form form={form}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input
                prefix={<HiOutlineMail style={{ fontSize: "20px" }} />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                () => ({
                  validator(_, value) {
                    if (
                      Validator.isStrongPassword(value, {
                        minLength: 8,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 1,
                      })
                    ) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error(
                          "Password should contain 1 Uppercase charecter, 1 Lowercase charecter, 1 Number and should have Length of 8"
                        )
                      );
                    }
                  },
                }),
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                prefix={<RiLockPasswordLine style={{ fontSize: "20px" }} />}
                iconRender={(visible) =>
                  visible ? <AiFillEye /> : <AiOutlineEyeInvisible />
                }
              />
            </Form.Item>
          </Form>
          <Button onClick={handleRegister} block type="primary">
            Register
          </Button>
        </Card>
      </div>
      <div className="login-link-text">
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
