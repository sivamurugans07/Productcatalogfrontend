import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // ✅ create navigate instance

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage(""); // clear old message first

        try {
            const res = await axios.post("http://localhost:5000/api/users/login", {
                email,
                password,
            });

            // ✅ Save user info & token in localStorage
            localStorage.setItem("userInfo", JSON.stringify(res.data));

            setMessage("✅ Login successful!");
            console.log("User data:", res.data);

            // ✅ Redirect to homepage after short delay (or instantly)
            setTimeout(() => navigate("/"), 1000); // redirects to home
        } catch (err) {
            console.error("Login error:", err);

            // ✅ handle cases when backend doesn't send proper response
            if (err.response?.data?.message) {
                setMessage("❌ " + err.response.data.message);
            } else {
                setMessage("❌ Server not responding or invalid credentials.");
            }
        }
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                textAlign: "center",
            }}
        >
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
                />

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        marginTop: "10px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>

            {message && (
                <p style={{ marginTop: "20px", color: message.includes("✅") ? "green" : "red" }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default LoginPage;
