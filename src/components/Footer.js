import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={{ margin: "10px 0" }}>© {new Date().getFullYear()} This store is made by SIVAMURUGAN.S CSE3YEAR</p>
            <div style={styles.links}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Instagram
                </a>
            </div>
            <p style={styles.text}>© 2025 MyStore. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#1e1e1e",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
    },
    links: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "10px",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
    },
    text: {
        fontSize: "14px",
    },
};

export default Footer;
