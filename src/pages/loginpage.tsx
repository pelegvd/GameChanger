import React, { useState } from "react";
import "../stylesheets/loginpage.css";

function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="heading">GameChanger</div>
        <form className="login-form">
          <div className="field">
            <input id="username" type="text" placeholder="username or email" />
            <label htmlFor="username">username or email</label>
          </div>
          <div className="field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <label htmlFor="password">Password</label>
            <button
              className="show-password-button"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="login-button" title="login">
            Sign In
          </button>
          <div className="separator">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="other">
            <button className="loginBtn loginBtn--facebook">Facebook</button>
            <button className="loginBtn loginBtn--google">Google</button>

            <a className="forgot-password" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="box">
        <p>
          Don't have an account?{" "}
          <a className="signup" href="#">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
