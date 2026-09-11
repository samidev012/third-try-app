import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
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

      alert("Registration successful!");

      console.log("REGISTER DATA:", data);

      // Form clear
      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error("REGISTER ERROR:", error);
      alert("Something went wrong.");
    }
  };

 return (
  <main className="register-page">

    <div className="register-card">

      <div className="register-header">
        <h1>Create Account</h1>
        <p>Join us and get started today</p>
      </div>

      <form onSubmit={handleRegister} className="register-form">

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

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
            placeholder="Minimum 6 characters"
            required
          />
        </div>

        <button type="submit" className="register-button">
          Create Account
        </button>

      </form>

      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

    </div>

  </main> 
   );
}

export default Register;