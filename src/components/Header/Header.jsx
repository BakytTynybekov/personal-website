import "./header.scss";
import logo from "../../images/logo.png";

import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img src={logo} alt="logo" className="logoImg" />
          </div>
          <nav>
            <ul className="menu">
              <li className="menu-item">
                <a href="" className="menu-item-link active">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-item-link">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-item-link">
                  Projects
                </a>
              </li>
              <li className="menu-item">
                <a href="" className="menu-item-link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
