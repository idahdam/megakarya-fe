import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import {
  FooterContainer,
  FooterRow,
  FooterColumn,
  FooterLogo,
  FooterBold,
  FooterText,
  FooterRegular,
  FooterLink,
  FooterColumnRight,
  FooterFacebook,
  FooterInstagram,
  FooterYoutube,
  FooterRowMobile,
} from "./footer.elements";
import logo from "../../assets/footer/logo2.png";

const Footer = () => {
  const [position, setPosition] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPosition(false);
      console.log("mobile!");
    } else {
      setPosition(true);
      console.log("desktop!");
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <FooterContainer>
      {position ? (
        <FooterRow>
          <FooterColumn>
            <FooterLogo src={logo} alt="logo" />
          </FooterColumn>
          <FooterColumnRight>
            <FooterText>
              <FooterBold>Contact Us</FooterBold>
              <FooterRegular>Sudirman, Jakarta, 15269</FooterRegular>
              <FooterRegular>+62 822 2222 1111</FooterRegular>
              <FooterRegular>example@corporate.com</FooterRegular>
              <FooterLink href="https://facebook.com">
                <FooterFacebook size={20} />
              </FooterLink>
              <FooterLink href="https://instagram.com">
                <FooterInstagram size={20} />
              </FooterLink>
              <FooterLink href="https://youtube.com">
                <FooterYoutube size={20} />
              </FooterLink>
            </FooterText>
          </FooterColumnRight>
        </FooterRow>
      ) : (
        <IconContext.Provider value={{ color: "#101010" }}>
          <FooterRowMobile>
            <FooterLink href="https://facebook.com">
              <FooterFacebook size={20} />
            </FooterLink>
            <FooterLink href="https://instagram.com">
              <FooterInstagram size={20} />
            </FooterLink>
            <FooterLink href="https://youtube.com">
              <FooterYoutube size={20} />
            </FooterLink>
          </FooterRowMobile>
        </IconContext.Provider>
      )}
    </FooterContainer>
  );
};

export default Footer;
