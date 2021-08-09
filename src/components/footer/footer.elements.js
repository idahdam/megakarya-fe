import styled from "styled-components";
// import { Container } from "../../globalStyles";

export const FooterContainer = styled.div`
  background-color: #101010;
  padding-top: 1%;
  padding-bottom: 1%;
  @media screen and (max-width: 960px) {
    width: auto;
  }
`;

export const FooterRow = styled.div`
  display: flex;
`;
export const FooterColumn = styled.div`
  flex: 50%;
`;
export const FooterRegular = styled.div`
  color: white;
  padding-top: 1%;
`;

export const FooterText = styled.div`
  padding-left: 5%;
  @media screen and (max-width: 960px) {
    padding-left: 0%;
    padding-top: 5%;
  }
`;

export const FooterLogo = styled.img`
  width: 25%;
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
  width: 50%;
  border: 3px solid green;
  padding: 10px;
`;
