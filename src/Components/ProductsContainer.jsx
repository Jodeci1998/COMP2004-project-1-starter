import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductsContainer = ({
  products,
  selectedQuantities,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  return (
    <div className="ProductsContainer">
      {/* Looping thougrh each product and displaying using ProductCard */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          currentQty={selectedQuantities[product.id] || 0}
          onIncrease={() => onIncrease(product.id)}
          onDecrease={() => onDecrease(product.id)}
          onAddToCart={() => onAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
