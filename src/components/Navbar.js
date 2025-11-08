import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const styles = {
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
        },
        left: {
            display: "flex",
            alignItems: "center",
            gap: "20px",
        },
        right: {
            display: "flex",
            alignItems: "center",
            gap: "15px",
        },
        link: {
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
        },
        logo: {
            fontSize: "20px",
            fontWeight: "bold",
        },
        cart: {
            backgroundColor: "#ff9900",
            padding: "5px 10px",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "bold",
        },
    };

    return (
        <nav style={styles.navbar}>
            {/* Left side: Home button + Store name */}
            <div style={styles.left}>
                <Link to="/" style={styles.link}>
                    Home
                </Link>
                <span style={styles.logo}>MyStore</span>
            </div>

            {/* Right side: Cart + Profile/Login/Register */}
            <div style={styles.right}>
                <Link to="/cart" style={styles.cart}>
                    Cart
                </Link>
                <Link to="/profile" style={styles.link}>
                    Profile
                </Link>
                <Link to="/login" style={styles.link}>
                    Login
                </Link>
                <Link to="/register" style={styles.link}>
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
