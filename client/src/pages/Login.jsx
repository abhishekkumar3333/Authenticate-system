import React, { useState } from "react";

import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/AuthContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({})
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { StoreToken } = useAuth();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = ("Email is Required")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid Email Format"
    };

    if (!loginData.password) {
      newErrors.password = "Password is Required"
    } else if (loginData.password.length < 6) {
      newErrors.password = "password must be of 6 character"
    };
    setError(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!validate()) return; 
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Login successful:", data);

        if (data.token) {
          StoreToken(data.token);
        }
        setMessage("Login successful!");
        navigate("/")
        setLoginData({ email: "", password: "" });
      } else {
        setMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("🚨 Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="login-section">
      <div className="main">
        {/* Left side image */}
        <div className="login-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Login"
          />
        </div>

        {/* Right side form */}
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
            {error.email && <p>{error.email}</p>}
            <input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
            {error.password && <p>{error.password}</p>}
            <button type="submit">Login</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
