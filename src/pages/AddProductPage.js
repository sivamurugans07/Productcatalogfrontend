import React, { useState } from "react";
import axios from "axios";

const AddProductPage = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("image", image);

        await axios.post("http://localhost:5000/api/products", formData);
        alert("Product added!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductPage;
