import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get("http://localhost:5000/api/categories");
                setCategories(data);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };
        fetchCategories();
    }, []);

    if (!categories.length) return <p>No categories found</p>;

    return (
        <div>
            <h2 style={{ marginBottom: "20px" }}>Categories</h2>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {categories.map((cat) => (
                    <Link
                        key={cat._id}
                        to={`/category/${cat.name}`}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "10px",
                            width: "150px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            src={cat.image ? `http://localhost:5000/uploads/${cat.image}` : "/default-cat.png"}
                            alt={cat.name}
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                        <h4>{cat.name}</h4>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
