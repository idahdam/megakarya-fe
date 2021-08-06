import React from "react";
import {
  FooterContainer,
  FooterRow,
  FooterColumn,
  FooterLogo,
  FooterBold,
  FooterText,
  FooterRegular,
} from "./footer.elements";
import logo from "../../assets/navbar/logo2.png";

const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;
