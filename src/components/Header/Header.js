import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../../styles/Header/Header.scss";

const Header = () => {
  const navLinkAbout = useRef();
  const navLinkWork = useRef();
  const navLinkContact = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  // Hover animation on nav links
  useEffect(() => {
    const routes = document.getElementsByClassName("header__route");
    for (let i = 0; i < routes.length; i++) {
      routes[i]?.addEventListener("mouseover", function () {
        this.nextSibling.classList.add("header__route-bg-animation");
      });
      routes[i]?.addEventListener("mouseout", function () {
        this.nextSibling.classList.remove("header__route-bg-animation");
      });
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <span data-aos="fade-down" data-aos-delay="0">P</span>
          <span data-aos="fade-down" data-aos-delay="700">o</span>
          <span data-aos="fade-down" data-aos-delay="800">r</span>
          <span data-aos="fade-down" data-aos-delay="900">t</span>
          <span data-aos="fade-down" data-aos-delay="1000">f</span>
          <span data-aos="fade-down" data-aos-delay="1100">o</span>
          <span data-aos="fade-down" data-aos-delay="1200">l</span>
          <span data-aos="fade-down" data-aos-delay="1300">i</span>
          <span data-aos="fade-down" data-aos-delay="1400">o</span>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`header__hamburger-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <nav
          className={`header__nav-links ${menuOpen ? "active" : ""}`}
          id="header__nav-links"
        >
          <ul>
            <div className="header__nav-links-container">
              <li
                className="header__route"
                ref={navLinkAbout}
                data-aos="fade-down"
                data-aos-delay="0"
              >
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              </li>
              <div className="header__route-bg"></div>
            </div>

            <div className="header__nav-links-container">
              <li
                className="header__route"
                ref={navLinkWork}
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <a href="#work" onClick={() => setMenuOpen(false)}>Works</a>
              </li>
              <div className="header__route-bg"></div>
            </div>

            <div className="header__nav-links-container">
              <li
                className="header__route"
                ref={navLinkContact}
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact me</a>
              </li>
              <div className="header__route-bg"></div>
            </div>
          </ul>

          {/* Social icons only for mobile */}
          <div className="header__social">
            <p className="header__linkedin">
              <a href="https://linkedin.com/in/adnan-haider-3360301b3" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p className="header__github">
              <a href="https://github.com/adnan-aadi7" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            {/* <p className="header__youtube">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </p> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
