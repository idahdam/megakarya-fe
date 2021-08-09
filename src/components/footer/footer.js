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
  FooterSocial,
  FooterSocialContainer,
  FooterSocialEach,
} from "./footer.elements";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/navbar/logo2.png";

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
          <FooterColumn>
            <FooterText>
              <FooterBold>Contact Us</FooterBold>
              <FooterRegular>Sudirman, Jakarta, 15269</FooterRegular>
              <FooterRegular>+62 822 2222 1111</FooterRegular>
              <FooterRegular>example@corporate.com</FooterRegular>
            </FooterText>
          </FooterColumn>
        </FooterRow>
      ) : (
        <IconContext.Provider value={{ color: "#101010" }}>
          <FooterRow>
            <FooterSocialContainer>
              <FooterSocial>
                <FooterSocialEach>
                  <FaFacebook />
                </FooterSocialEach>
              </FooterSocial>
              <FooterSocial>
                <FooterSocialEach>
                  <FaInstagram />
                </FooterSocialEach>
              </FooterSocial>
              <FooterSocial>
                <FooterSocialEach>
                  <FaYoutube />
                </FooterSocialEach>
              </FooterSocial>
            </FooterSocialContainer>
          </FooterRow>
        </IconContext.Provider>
      )}
    </FooterContainer>
  );
};

export default Footer;
