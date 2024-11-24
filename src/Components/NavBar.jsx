import React from "react";
import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

const NavBar = ({ username, totalCartItems }) => {
  return (
    <nav className="NavBar">
      <span className="NavUser">Hello, {username}!</span>
      <div className="NavDiv">
        <h1 className="NavTitle">Groceries App 🥗</h1>
        <div className="NavCart">
          {/* Display the cart image based on totalCartItems */}
          <img
            src={totalCartItems > 0 ? cartFull : cartEmpty}
            alt={totalCartItems > 0 ? "Cart Full" : "Cart Empty"}
          />
          {totalCartItems > 0 && (
            <span className="CartItemCount">{totalCartItems}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
