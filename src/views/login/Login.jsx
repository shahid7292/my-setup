import React, { useState } from "react";
import { Input, Button, Card, Form } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import cookieServices from "../../services/cookies.js";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../redux/actions/auth.actions";

function Login() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const successCallback = () => {
      cookieServices().setAppToken({ access: "abcde" });
      navigate("/app");
      toast.success("Logged in Successfully");
    };

    const errorCallback = () => {
      toast.error("Invalid credentials");
    };
    dispatch(requestLogin({ email, password }, successCallback, errorCallback));
  };

  return (
    <div>
      <div className="login-form-container">
        <Card className="login-form-card">
          <div className="login-form-header">Welcome Back</div>
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
            <Form.Item>
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
          <div className="forgot-password-link">
            <Link to="/auth/forgot-password" style={{ textDecoration: "none" }}>
              {"Forgot password?"}
            </Link>
          </div>
          <Button onClick={handleLogin} block type="primary">
            Login
          </Button>
        </Card>
      </div>
      <div className="signup-link-text">
        <p>
          {"Don't have an account yet?"}{" "}
          <Link to="/auth/register" style={{ textDecoration: "none" }}>
            {"Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
