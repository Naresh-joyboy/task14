import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>
                    <LINK to="/" className="logo">
                        Booat
                    </LINK>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <LINK to="/">Home</LINK>
                    </li>
                </ul>
                <ul>
                    <li>
                        <LINK to="/Singup">Singup</LINK>
                    </li>
                </ul>
                <ul>
                    <li>
                        <LINK to="/cart" className="cart">
                            <i class="fas fa-shopping-cart" />
                        </LINK>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;