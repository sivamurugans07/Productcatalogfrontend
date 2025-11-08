import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(
                `http://localhost:5000/api/products/category/${categoryName}`
            );
            setProducts(data);
        };
        fetchProducts();
    }, [categoryName]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Category: {categoryName}</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map((prod) => (
                    <div
                        key={prod._id}
                        style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
                    >
                        <img
                            src={`http://localhost:5000/images/${prod.image}`}
                            alt={prod.name}
                            style={{ width: "100%" }}
                        />
                        <h4>{prod.name}</h4>
                        <p>${prod.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
