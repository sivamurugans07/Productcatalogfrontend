import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // assuming you have a context
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems } = useContext(CartContext);

    return (
        <div style={{ padding: "10px", background: "#f8f8f8" }}>
            <h3>Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item._id}>
                            <Link to={`/product/${item._id}`}>{item.name}</Link> - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/cart">Go to Cart</Link>
        </div>
    );
}

export default Cart;
