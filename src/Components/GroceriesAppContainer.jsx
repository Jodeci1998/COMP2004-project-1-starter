import React, { useState } from "react";
import productsData from "../data/products.js";
import NavBar from "./NavBar.jsx";
import ProductsContainer from "./ProductsContainer.jsx";
import CartContainer from "./CartContainer.jsx";

const GroceriesAppContainer = () => {
  // State for the cart items
  const [shoppingCart, setShoppingCart] = useState([]);

  // State for the quantities for each product
  const [selectedQuantities, setSelectedQuantities] = useState({});

  // Function to add items to the cart
  const addProductToCart = (product, qty) => {
    setShoppingCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Update qty if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        // Add new product with the qty
        return [...prevCart, { ...product, quantity: qty }];
      }
    });

    // Reset selected qty after adding to cart
    setSelectedQuantities((prev) => ({
      ...prev,
      [product.id]: 0,
    }));
  };

  // Function to update the qty of a product in the shopping cart
  const modifyProductQuantity = (prodId, newQty) => {
    setShoppingCart((prevCart) =>
      prevCart.map((item) =>
        item.id === prodId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Function to delete a product from the shopping cart
  const deleteProductFromCart = (prodId) => {
    setShoppingCart((prevCart) =>
      prevCart.filter((item) => item.id !== prodId)
    );
  };

  // Function to empty the entire cart
  const emptyCart = () => {
    setShoppingCart([]);
  };

  // Function to handle increasing qty in ProductCard
  const handleIncreaseQuantity = (productId) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  // Function to handle decreasing qty in ProductCard
  const handleDecreaseQuantity = (productId) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] > 0 ? prev[productId] - 1 : 0,
    }));
  };

  // Function to handle adding product to cart from ProductCard
  const handleAddToCart = (productId) => {
    const product = productsData.find((p) => p.id === productId);
    const qty = selectedQuantities[productId] || 0;

    if (qty > 0) {
      addProductToCart(product, qty);
    } else {
      alert("Please select a number of items before trying to add.");
    }
  };

  // Calculating the total of all products in the cart
  const totalAmount = shoppingCart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  // Calculating the total number of products in the cart
  const totalProducts = shoppingCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="GroceriesApp-Container">
      <NavBar username="Joe" totalCartItems={totalProducts} />
      <div className="MainContent">
        <ProductsContainer
          products={productsData}
          selectedQuantities={selectedQuantities}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
          onAddToCart={handleAddToCart}
        />
        <CartContainer
          productsInCart={shoppingCart}
          totalAmount={totalAmount}
          totalProducts={totalProducts}
          updateProductQuantity={modifyProductQuantity}
          deleteProductFromCart={deleteProductFromCart}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
