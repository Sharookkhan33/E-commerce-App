import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Trendy Cart</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="login-btn">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
