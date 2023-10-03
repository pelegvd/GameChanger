import React, { useState } from "react";
import { signupPost } from "../api/SignupService";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function fetchData(data: any) {
    try {
      const result = await signupPost(data);
      return result.status;
    } catch (error: any) {
      const status = error.response.status;
      console.log(status);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const jsonData = JSON.stringify(Object.fromEntries(data.entries()));
    console.log(jsonData);
    fetchData(jsonData);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="heading">GameChanger</div>
        <form onSubmit={handleSubmit}>
          <div>
            <input name="name" />
            <label>Full Name</label>
          </div>
          <div className="field">
            <input name="email" />
            <label htmlFor="username">Email</label>
          </div>
          <div className="field">
            <input name="phone" />
            <label>Phone</label>
          </div>
          <div>
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <label>Password</label>
            <button
              className="show-password-button"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="login-button" title="login">
            Sign up
          </button>
        </form>
      </div>
      <div className="box">
        <p>
          Already have an account?{" "}
          <a className="signup" href="/sign-in">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
