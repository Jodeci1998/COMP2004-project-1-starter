import React from "react";
import QuantityCounter from "./QuantityCounter.jsx";

const ProductCard = ({
  product,
  currentQty,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  // Parsing the price from string to float
  const price = parseFloat(product.price.replace("$", ""));

  return (
    <div className="ProductCard">
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.productName} />
      <h3>{product.brand}</h3>
      <div className="ProductQuantityDiv">
        <QuantityCounter
          currentQty={currentQty}
          increase={onIncrease}
          decrease={onDecrease}
          min={0} // Minimum quantity is =  0
        />
      </div>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart} className="AddToCartButton">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
