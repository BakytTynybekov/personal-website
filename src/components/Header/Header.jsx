import "./header.scss";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [siderBar, setSideBar] = useState(false);
  const [header, setHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(null);

  const changeTheBackground = () => {
    setLastScrollTop(window.scrollY);

    if (lastScrollTop > window.scrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeTheBackground);

  useEffect(() => {
    if (siderBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [siderBar]);

  useEffect(() => {
    if (lastScrollTop < 150) {
      setHeader(false);
    }
  }, [lastScrollTop]);

  return (
    <header className={header ? "header fixedHeader" : "header"}>
      <div className="container">
        <div
          className={siderBar ? "header-inner activeHeader" : "header-inner"}
        >
          <div className="logo">
            <img src={logo} alt="logo" className="logoImg" />
          </div>
          <nav>
            <div className="bars" onClick={() => setSideBar(!siderBar)}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div
              className={
                siderBar ? "menu-container activeBar" : "menu-container"
              }
            >
              <div className="close" onClick={() => setSideBar(!siderBar)}>
                <i class="fa-solid fa-circle-xmark"></i>{" "}
              </div>
              <ul className="menu">
                <li className="menu-item">
                  <span>
                    <i class="fa-solid fa-house"></i>
                  </span>
                  <Link
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                    className="menu-item-link "
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <span>
                    <i class="fa-solid fa-circle-info"></i>
                  </span>
                  <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                    className="menu-item-link "
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <span>
                    <i class="fa-solid fa-briefcase"></i>
                  </span>
                  <Link
                    to="portfolio"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                    className="menu-item-link "
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="menu-item">
                  <span>
                    <i class="fa-solid fa-address-book"></i>
                  </span>
                  <Link
                    to="contacts"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                    className="menu-item-link "
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
