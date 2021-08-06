import styled from "styled-components";
import { Container } from "../../globalStyles";

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
