import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const validate = () => {
        let newErrors = {};

        if (!registerData.username) {
            newErrors.username = "username is required"
        };

        if (!registerData.email) {
            newErrors.email = "Email is required"
        };

        if (!registerData.password) {
            newErrors.password = "password is required"
        };

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Registration successfully", data);
                navigate("/login")
                setRegisterData({
                    username: "",
                    email: "",
                    password: "",
                });
            }
            else {
                console.log("Registartion failed", error)
            }
        } catch (error) {
            console.log("register", error)
        }

    };

    return (
        <section className="register-section">
            <div className="image-div">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Register"
                />
            </div>

            {/* Registration Form */}
            <div className="registration-form">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={registerData.username}
                        placeholder="Enter your name"
                        onChange={handleOnchange}
                    />
                    {error.username && <p>{error.username}</p>}
                    <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        placeholder="Enter your Email"
                        onChange={handleOnchange}
                    />
                    {error.email && <p>{error.email}</p>}
                    <input
                        type="password"
                        name="password"
                        value={registerData.password}
                        placeholder="Enter your Password"
                        onChange={handleOnchange}
                    />
                    {error.password && <p>{error.password}</p>}
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </section>
    );
};

export default Register;
