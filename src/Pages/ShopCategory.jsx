import React from "react";
import ProductCard from "../components/ProductCard";
import TrendingProductBanner from "../components/Banner/TrendingProductBanner";
import all_product from "../components/Assets/all_product";
import "./ShopCategory.css";

const ShopCategory = ({ category }) => {
  // Ensure category names match the data format
  const filteredProducts = all_product.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <TrendingProductBanner />
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
