import React, { useState, useEffect } from "react";
import logo from "../../assets/navbar/logo2.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImg,
  NavText,
  NavHref,
} from "./navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { navbarService } from "../../services/navbarService";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const [data, setData] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await navbarService.getWhatsappLink();
      setData(response.data);
    };
    fetchData();
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  if (data === null) return null;
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavImg src={logo} alt="bye" />
            </NavLogo>
            <NavText>TARUNA MEGA KARYA</NavText>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/product">Product</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio">Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavHref
                  href={
                    data.whatsappLink ? `https://${data.whatsappLink}` : null
                  }
                  targ
                >
                  Contact Us
                </NavHref>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
