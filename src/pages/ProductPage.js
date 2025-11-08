import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams(); // get product id from URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <h2 style={styles.loading}>Loading...</h2>;
    if (!product) return <h2 style={styles.error}>Product not found</h2>;

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src={
  product.image
    ? `http://localhost:5000/uploads/${product.image}`
    : "/placeholder.png"
}

                    alt={product.name}
                    style={styles.image}
                />
            </div>

            <div style={styles.details}>
                <h2 style={styles.name}>{product.name}</h2>
                <p style={styles.category}>Category: {product.category}</p>
                <p style={styles.description}>{product.description}</p>
                <h3 style={styles.price}>Price: ₹{product.price}</h3>

                <button style={styles.button}>Add to Cart</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "40px",
    },
    imageContainer: {
        maxWidth: "400px",
    },
    image: {
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    details: {
        maxWidth: "500px",
    },
    name: {
        fontSize: "2rem",
        marginBottom: "10px",
    },
    category: {
        fontStyle: "italic",
        color: "gray",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1rem",
        marginBottom: "15px",
    },
    price: {
        fontSize: "1.4rem",
        color: "#007bff",
        marginBottom: "20px",
    },
    button: {
        padding: "12px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    loading: {
        textAlign: "center",
        marginTop: "50px",
    },
    error: {
        textAlign: "center",
        marginTop: "50px",
        color: "red",
    },
};

export default ProductPage;
