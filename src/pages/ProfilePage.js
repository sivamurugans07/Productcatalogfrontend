import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (!userInfo) {
                setError("Not logged in!");
                return;
            }

            try {
                const res = await axios.get("http://localhost:5000/api/users/profile", {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                });
                setProfile(res.data);
            } catch (err) {
                setError("Unauthorized or token expired");
            }
        };

        fetchProfile();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Profile</h2>
            {error && <p>{error}</p>}
            {profile && (
                <div>
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
