import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NavBar.css";
import AddIcon from "@mui/icons-material/Add";
import AddEvent from "../pages/AddEventPage";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            GAMECHANGER
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={closeMobileMenu}>
                <AddEvent />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
