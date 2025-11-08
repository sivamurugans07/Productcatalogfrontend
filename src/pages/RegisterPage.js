import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/users/register", {
                name,
                email,
                password,
            });

            setMessage("✅ Registration successful!");
            console.log(res.data);
        } catch (err) {
            console.error("Registration error:", err);
            // safely handle all error types
            const errorMsg =
                err.response?.data?.error || // our backend sends { error: "..." }
                err.response?.data?.message || // some send { message: "..." }
                err.message ||
                "Unknown error occurred";
            setMessage("❌ " + errorMsg);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
                />
                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
                />
                <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
            </form>
            {message && (
                <p style={{ marginTop: "15px", color: message.startsWith("✅") ? "green" : "red" }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default RegisterPage;
