import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setIsLoggedIn })  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      // JWT token save
      localStorage.setItem("token", data.token);

      // User data save
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );
      setIsLoggedIn(true);

      alert("Login successful!");

      // Home page par redirect
      navigate("/");

    } catch (error) {
      console.error("LOGIN ERROR:", error);
      alert("Something went wrong.");
    }
  };
return (
  <main className="login-page">

    <div className="login-card">

      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
      </div>

      <form onSubmit={handleLogin} className="login-form">

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

      </form>

      <p className="register-text">
        Don't have an account?{" "}
        <Link to="/register">
          Create account
        </Link>
      </p>

    </div>

  </main>
  );
}

export default Login;