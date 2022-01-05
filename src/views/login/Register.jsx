import React, { useState } from "react";
import { Input, Button, Card, Form } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Validator from "validator";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import "./register.scss";

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
      <div className="register-form-container">
        <Card className="register-form-card">
          <div className="register-form-header">Create Account</div>
          <div className="register-box-text">
            {
              "You're moments away from launching a blazing fast SSD Cloud Server. Enter your email and create a password to get started!"
            }
          </div>
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
                placeholder="Email Address"
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
                placeholder="Password"
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
            Create Account
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
