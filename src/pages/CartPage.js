import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js.js";

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h2>🛒 Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item.id} style={styles.item}>
                            <img src={item.image} alt={item.name} style={styles.image} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>₹{item.price} × {item.qty}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <hr />
                    <h3>Total: ₹{totalPrice}</h3>
                    <button onClick={clearCart} style={styles.clearBtn}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

const styles = {
    item: { display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 0", borderBottom: "1px solid #ccc", paddingBottom: "10px" },
    image: { width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" },
    removeBtn: { background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" },
    clearBtn: { background: "gray", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" },
};

export default CartPage;
