import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavContainer,
  Logo,
  Icon,
  MobileIcon,
  NavMenu,
  NavItem,
  LinkScroll,
} from "./navbar.elements";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [button, setButton] = useState(true);

  const handleToggle = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);

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

  const [scrollNav, setScrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#2F3A56" }}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <Logo to="/" onClick={closeMenu}>
            {/* <LinkScroll to="/" smooth onClick={closeMenu}> */}
            Logo
            {/* </LinkScroll> */}
          </Logo>
          <MobileIcon onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleToggle} toggle={toggle}>
            <NavItem>
              <LinkScroll to="/concept" smooth onClick={closeMenu}>
                ABOUT
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/competition" smooth onClick={closeMenu}>
                COMPETITION
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/event" smooth onClick={closeMenu}>
                EVENT
              </LinkScroll>
            </NavItem>
            <NavItem>
              <LinkScroll to="/contact" smooth onClick={closeMenu}>
                CONTACT
              </LinkScroll>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;