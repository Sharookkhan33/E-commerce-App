import React from "react";
import ProductCard from "../components/ProductCard";
import TrendingProductBanner from "../components/Banner/TrendingProductBanner";
import allProducts from "../components/Assets/all_product";

const Shop = () => {
  return (
    <div>
      <TrendingProductBanner />
      <h2>All Products</h2>
      <div className="product-grid">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
