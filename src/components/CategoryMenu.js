import React from "react";

const categories = ["Electronics", "Clothing", "Books", "Home", "Toys"];

const CategoryMenu = ({ onSelect }) => {
    return (
        <div style={styles.menu}>
            {categories.map((cat) => (
                <button key={cat} onClick={() => onSelect(cat)} style={styles.button}>
                    {cat}
                </button>
            ))}
        </div>
    );
};

const styles = {
    menu: { display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" },
    button: { background: "#f0f0f0", border: "1px solid #ccc", padding: "8px 15px", borderRadius: "20px", cursor: "pointer" },
};

export default CategoryMenu;
