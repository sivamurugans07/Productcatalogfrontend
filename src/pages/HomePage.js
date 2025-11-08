import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = ["All", "Offer", "Electronics", "Fashion", "Books", "Home"];

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load products");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading)
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading products...</p>;
    if (error)
        return (
            <p style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
                {error}
            </p>
        );

    const featuredProducts = products.filter((p) => p.isFeatured);

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
            );

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        cssEase: "ease-in-out",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    const gradientBackgrounds = [
        "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    ];

    return (
        <div style={{ padding: "15px", fontFamily: "Arial, sans-serif" }}>
            {/* 1️⃣ Featured Products Slider */}
            <section style={{ marginBottom: "30px" }}>
                <h2
                    style={{
                        marginBottom: "15px",
                        fontSize: "22px",
                        color: "#d32f2f",
                    }}
                >
                    🔥 Featured Products
                </h2>

                <Slider {...sliderSettings}>
                    {featuredProducts.map((p, index) => (
                        <div key={p._id} style={{ padding: "10px" }}>
                            <Link
                                to={`/product/${p._id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <div
                                    className="slider-card"
                                    style={{
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        textAlign: "center",
                                        background:
                                            gradientBackgrounds[index % gradientBackgrounds.length],
                                        position: "relative",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                        height: "220px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        cursor: "pointer",
                                        padding: "8px",
                                        color: "#fff",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                >
                                    {p.discount && (
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "8px",
                                                left: "8px",
                                                background: "#ff6f61",
                                                color: "#fff",
                                                padding: "4px 8px",
                                                borderRadius: "8px",
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {p.discount}% OFF
                                        </div>
                                    )}

                                    <img
                                        src={
                                            p.images?.[0]
                                                ? `http://localhost:5000/uploads/${p.images[0]}`
                                                : "/placeholder.png"
                                        }
                                        alt={p.name}
                                        style={{
                                            width: "100%",
                                            height: "130px",
                                            objectFit: "cover",
                                            borderRadius: "6px",
                                        }}
                                    />
                                    <h4
                                        style={{
                                            margin: "5px 0 2px",
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {p.name}
                                    </h4>
                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: "13px",
                                            fontWeight: "bold",
                                            color: "#fff",
                                        }}
                                    >
                                        ₹{p.price}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* 2️⃣ Categories */}
            <section style={{ marginBottom: "25px" }}>
                <h2 style={{ marginBottom: "10px", fontSize: "20px", color: "#333" }}>
                    Categories
                </h2>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: "8px 15px",
                                borderRadius: "20px",
                                border:
                                    selectedCategory === cat
                                        ? "2px solid #d32f2f"
                                        : "1px solid #ccc",
                                background:
                                    selectedCategory === cat ? "#ffdada" : "#fff",
                                cursor: "pointer",
                                fontWeight:
                                    selectedCategory === cat ? "bold" : "normal",
                                transition: "0.3s",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3️⃣ Product Grid */}
            <section>
                <h2
                    style={{
                        marginBottom: "15px",
                        fontSize: "20px",
                        color: "#333",
                    }}
                >
                    {selectedCategory} Products
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "15px",
                    }}
                >
                    {filteredProducts.map((p) => (
                        <Link
                            key={p._id}
                            to={`/product/${p._id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div
                                style={{
                                    border: "1px solid #eee",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    background: "#fff",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                    padding: "10px",
                                    transition: "transform 0.2s",
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    src={
                                        p.images?.[0]
                                            ? `http://localhost:5000/uploads/${p.images[0]}`
                                            : "/placeholder.png"
                                    }
                                    alt={p.name}
                                    style={{
                                        width: "100%",
                                        height: "120px",
                                        objectFit: "cover",
                                        borderRadius: "6px",
                                    }}
                                />
                                <h4
                                    style={{
                                        margin: "8px 0 4px",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {p.name}
                                </h4>
                                <p
                                    style={{
                                        margin: 0,
                                        fontWeight: "bold",
                                        color: "#388e3c",
                                        fontSize: "13px",
                                    }}
                                >
                                    ₹{p.price}
                                </p>
                                {p.discount && (
                                    <span
                                        style={{
                                            display: "inline-block",
                                            marginTop: "4px",
                                            background: "#d32f2f",
                                            color: "#fff",
                                            padding: "3px 6px",
                                            borderRadius: "6px",
                                            fontSize: "11px",
                                        }}
                                    >
                                        {p.discount}% OFF
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
