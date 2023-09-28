import React, { useState } from 'react'

function SignUpPage() {

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
          <label htmlFor="username">Full Name</label>
        </div>
        <div className="field">
          <input id="username" type="text" placeholder="username or email" />
          <label htmlFor="username">Email</label>
        </div>
        <div className="field">
          <input id="username" type="text" placeholder="username or email" />
          <label htmlFor="username">Phone</label>
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
  )
}

export default SignUpPage;