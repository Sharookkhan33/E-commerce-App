import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FiMenu size={24} />
        </button>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Trendy Cart</p>
        </div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
          {cart.length > 0 && <div className="nav-cart-count">{cart.length}</div>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
