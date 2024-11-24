import React from "react";
import QuantityCounter from "./QuantityCounter.jsx";

const CartCard = ({ product, onIncrease, onDecrease, onDeleteProduct }) => {
  // Parsing the price from string to float for calculations
  const price = parseFloat(product.price.replace("$", ""));

  return (
    //Left section for product info

    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={product.image} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>${price.toFixed(2)}</p>
        <QuantityCounter
          currentQty={product.quantity}
          increase={onIncrease}
          decrease={onDecrease}
          min={1} // Minimum quantity is 1
        />
      </div>

      {/* Right section for total and remove button */}
      <div className="CartCardInfo">
        <p>Total: ${(price * product.quantity).toFixed(2)}</p>
        <button onClick={onDeleteProduct} className="RemoveButton">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
