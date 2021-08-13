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
import { footerService } from "../../services/footerService";

const Footer = () => {
  const [data, setData] = useState(null);
  const [position, setPosition] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await footerService.getAllContactUsComponents();
      setData(response.data);
      console.log(response.data);
    };
    fetchData();
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  if (data === null) return null;
  return (
    <FooterContainer>
      {position ? (
        <FooterRow>
          <FooterColumn>
            <FooterLogo src={logo} alt="logo" />
          </FooterColumn>
          <FooterColumnRight>
            {data !== null ? (
              <FooterText>
                <FooterBold>{data.title}</FooterBold>
                <FooterRegular>{data.address}</FooterRegular>
                <FooterRegular>{data.phone_number}</FooterRegular>
                <FooterRegular>{data.email}</FooterRegular>
                <FooterLink href={`${data.facebook}`}>
                  <FooterFacebook size={20} />
                </FooterLink>
                <FooterLink href={`${data.instagram}`}>
                  <FooterInstagram size={20} />
                </FooterLink>
                <FooterLink href={`${data.youtube}`}>
                  <FooterYoutube size={20} />
                </FooterLink>
              </FooterText>
            ) : null}
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
