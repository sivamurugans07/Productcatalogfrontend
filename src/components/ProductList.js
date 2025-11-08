// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList({ searchQuery = "" }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from backend
        fetch("http://localhost:5000/api/products") // change port if needed
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, []);

    // Filter products by search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <p>Loading products...</p>;
    if (filteredProducts.length === 0)
        return <p>No products found.</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Products</h2>
            <div style={styles.grid}>
                {filteredProducts.map((product) => (
                    <div key={product._id} style={styles.card}>
                        <Link to={`/product/${product._id}`} style={styles.link}>
                            <img
                                src={product.image ? `http://localhost:5000/uploads/${product.image}` : "/placeholder.png"}
                                alt={product.name}
                                style={styles.image}
                            />
                            <h3 style={styles.name}>{product.name}</h3>
                            <p style={styles.price}>
                                ₹{product.price}
                                {product.discount && (
                                    <span style={styles.discount}>
                                        {" "}
                                        (Discounted: ₹{(product.price - product.discount).toFixed(2)})
                                    </span>
                                )}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "28px",
        fontWeight: "bold",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
    },
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
        transition: "transform 0.2s",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    name: {
        fontSize: "18px",
        margin: "10px 0",
    },
    price: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    discount: {
        fontSize: "14px",
        color: "red",
        fontWeight: "normal",
    },
};

export default ProductList;
