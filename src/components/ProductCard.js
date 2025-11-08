import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("🧠 Button clicked!");
    console.log("🛒 Add to cart clicked for:", product.name);

    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", {
        userId: "user1", // Change later when you add login
        productId: product._id,
        quantity: 1,
      });

      console.log("✅ Cart response:", res.data);
      alert("✅ Added to cart!");
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      alert("Failed to add to cart!");
    }
  };

  return (
    <div className="product-card">
      {/* ✅ Clickable only for image & name */}
      <Link
        to={`/product/${product._id}`}
        className="product-link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={`http://localhost:5000/uploads/${product.images?.[0]}`}
          alt={product.name}
          className="product-image"
        />
        <div className="product-name">{product.name}</div>
        <div className="product-category">
          {product.category?.name || "No category"}
        </div>
        <div className="product-price">${product.price}</div>
      </Link>

      {/* 🛒 Add to Cart Button */}
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
} export default ProductCard;