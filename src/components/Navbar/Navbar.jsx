import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar__wrapper">
        <div className="navbar">
            <div className="logo">
                <p>KNIT</p>
            </div>
            <ul>
                <li>
                    <Link to="/discover">Discover</Link></li>
                <li>
                    <Link to="/shop">Shop</Link>
                    </li>
            </ul>
        </div>
    </div>
    )
}
