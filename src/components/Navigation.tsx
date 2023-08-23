import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItems";

export default function Navigation() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="NavbarItems">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        Game Changer
      </Link>
      <div className="menu-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href="/">
                {item.title}
              </a>
            </li>
          );
        })}
        <button>Account</button>
      </ul>
    </nav>
  );
}

//https://www.youtube.com/watch?v=0dOSLhPzSGI
