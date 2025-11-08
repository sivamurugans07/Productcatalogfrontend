import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import ProductSlider from "./components/ProductSlider";  // ✅ Correct import
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Search bar at top */}
      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      {/* Navbar with profile link */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductSlider />  {/* ✅ replaced ProductVideoSlider */}
              <CategoryList />
              <ProductList searchQuery={searchQuery} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
