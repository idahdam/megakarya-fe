import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionFourContainer = styled.div`
  padding: 5%;
  @media screen and (max-width: 960px) {
    padding: 0%;
  }
`;
export const SectionFourRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: block;
    flex-direction: row;
  }
`;
export const SectionFourColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  @media screen and (max-width: 960px) {
  }
`;

export const SectionFourImageFirstRow = styled.img`
  widht: 100%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
export const SectionFourTextSecondRow = styled.div`
  color: white;
  padding: 15% 10%;
`;
export const SectionFourTextFirstRow = styled.div`
  padding: 10%;
`;
export const SectionFourImageSecondRow = styled.img`
  width: 75%;
`;
export const SectionFourTitle = styled.div`
  font-weight: bold;
  font-size: 1.75rem;
  padding-bottom: 2.5%;
`;
export const SectionFourDescription = styled.div`
  padding-bottom: 5%;
`;
export const SectionFourLink = styled(Link)`
  background-color: #b01f24;
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const SectionFourWhiteColumn = styled.div``;
export const SectionFourGreyColumn = styled.div`
  background-color: #404040;
  height: 100%;
`;

export const SectionFourImageContainer = styled.div`
  background-color: #404040;
`;
