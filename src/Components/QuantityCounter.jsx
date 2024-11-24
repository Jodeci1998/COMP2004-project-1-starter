import React from "react";

const QuantityCounter = ({ currentQty, increase, decrease, min }) => {
  return (
    <div className="counter-container">
      {/* Button to decrease the qty */}
      <button
        onClick={decrease}
        disabled={currentQty <= min}
        className="counter-button"
        aria-label="Decrease quantity"
      >
        -
      </button>
      {/* Displays the current qty*/}
      <span>{currentQty}</span>
      {/* Button to increase the qty */}
      <button
        onClick={increase}
        className="counter-button"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
