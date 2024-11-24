import React from "react";
import CartCard from "./CartCard.jsx";

const CartContainer = ({
  productsInCart,
  totalAmount,
  totalProducts,
  updateProductQuantity,
  deleteProductFromCart,
  emptyCart,
}) => {
  //Rendering the buttons for the Cart container after receiving information
  return (
    <div className="CartContainer">
      <h2>Cart Items: {totalProducts}</h2>
      {productsInCart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {productsInCart.map((product) => (
            <CartCard
              key={product.id}
              product={product}
              onIncrease={() =>
                updateProductQuantity(product.id, product.quantity + 1)
              }
              onDecrease={() => {
                if (product.quantity > 1) {
                  updateProductQuantity(product.id, product.quantity - 1);
                }
              }}
              onDeleteProduct={() => deleteProductFromCart(product.id)}
            />
          ))}
          <div className="CartListBtns">
            <button onClick={emptyCart} className="RemoveButton">
              Empty Cart
            </button>
            <button id="BuyButton">Checkout (${totalAmount.toFixed(2)})</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
