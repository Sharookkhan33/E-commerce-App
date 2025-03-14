import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.new_price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.new_price.toFixed(2)}</p>
                  <p>Quantity: {item.qty}</p>
                </div>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
          <div className="cart-buttons">
            <button>Checkout</button>
            <button>Continue Shopping</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
