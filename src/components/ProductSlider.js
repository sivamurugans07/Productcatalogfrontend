import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./ProductSlider.css";

const ProductSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                const featured = res.data.filter((p) => p.isFeatured);
                setProducts(featured);
            } catch (err) {
                console.error("Failed to load products:", err);
                setProducts([]);
            }
        };

        fetchProducts();
    }, []);

    if (!products || products.length === 0) {
        return (
            <div className="slider-loading">
                <p>No featured products found.</p>
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
    };

    return (
        <div className="product-slider">
            <Slider {...settings}>
                {products.map((product) => {
                    // ✅ Prevent crash even if product.images is missing
                    const imageUrl = product?.images?.[0]
                        ? `http://localhost:5000/uploads/${product.images[0]}`
                        : "https://via.placeholder.com/800x400?text=No+Image";

                    return (
                        <div
                            className="slide"
                            key={product._id}
                            onClick={() => (window.location.href = `/product/${product._id}`)}
                        >
                            <img src={imageUrl} alt={product.name} className="slide-img" />
                            <div className="slide-info">
                                <h2>{product.name}</h2>
                                <p>₹{product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ProductSlider;
