import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="logo">
          <p>KNIT</p>
        </div>
        <ul className="pagesTabs">
          <li>
            <Link to="/discover">MÉDIA</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
        <div className="profileFunctions">
          <div className="profile">
            <img src="/assets/icons/SVG/user.svg" alt="" />
          </div>
          <div className="favorite">
            <img src="/assets/icons/SVG/fav.svg" alt="" />
          </div>
          <div className="cart">
            <img src="/assets/icons/SVG/cart.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
