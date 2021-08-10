import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
// import { Container } from "../../globalStyles";

export const FooterContainer = styled.div`
  background-color: #101010;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 10%;
  @media screen and (max-width: 960px) {
    width: auto;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 0%;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    width: auto;
    margin: auto;
    padding-left: 35%;
    text-align: center;
  }
`;
export const FooterColumn = styled.div`
  flex: 50%;
`;
export const FooterColumnRight = styled.div`
  text-align: left;
  flex: 50%;
`;
export const FooterRegular = styled.div`
  color: white;
  padding-top: 1%;
`;

export const FooterText = styled.div`
  padding-top: 1%;
  padding-left: 35%;
  line-height: 1.5;
  @media screen and (max-width: 960px) {
    padding-left: 0%;
    padding-top: 5%;
  }
`;

export const FooterLogo = styled.img`
  width: 30%;
  margin-top: -2%;
  margin-bottom: -2%;
  @media screen and (max-width: 960px) {
    padding-top: 10%;
    width: 100%;
  }
`;

export const FooterBold = styled.div`
  font-weight: bold;
  padding-top: 1%;
  color: white;
`;

export const FooterSocial = styled.li`
  height: 30px;
  width: 25px;
  padding: 0 3.5%;
  margin-bottom: 1rem;
  border-bottom: 2px solid transparent;
`;

export const FooterSocialEach = styled.div`
  background-color: #c4c4c4;
  padding-top: 15%;
  border-radius: 50px;
`;

export const FooterSocialContainer = styled.ul`
  width: 120%;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  margin: auto;
  border: 3px solid green;
  padding: 10px;
`;

export const FooterFacebook = styled(FaFacebook)`
  border-radius: 100px;
  padding: 1.5%;
  margin: 3% 1%;
  background-color: white;
  @media screen and (max-width: 960px) {
    padding: 3%;
    margin: 3% 3%;
    background-color: #c4c4c4;
  }
`;

export const FooterInstagram = styled(FaInstagram)`
  border-radius: 100px;
  padding: 1.5%;
  margin: 3% 1%;
  background-color: white;
  @media screen and (max-width: 960px) {
    padding: 3%;
    margin: 3% 3%;
    background-color: #c4c4c4;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none !important;
  color: black;
`;

export const FooterYoutube = styled(FaYoutube)`
  border-radius: 100px;
  padding: 1.5%;
  margin: 3% 1%;
  background-color: white;
  @media screen and (max-width: 960px) {
    padding: 3%;
    margin: 3% 3%;
    background-color: #c4c4c4;
  }
`;

export const FooterRowMobile = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 1%;
`;
