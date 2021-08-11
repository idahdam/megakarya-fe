import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionFourContainer = styled.div`
  padding: 0% 10%;
  padding-bottom: 2.5%;
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
  width: 100%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;
export const SectionFourTextSecondRow = styled.div`
  color: white;
  padding: 9% 13%;
  padding-top: 15%;
  height: 49%;
  position: relative;
  @media screen and (max-width: 960px) {
    padding: 10% 7.5%;
    padding-bottom: 5%;
  }
`;
export const SectionFourTextFirstRow = styled.div`
  padding: 12% 13%;
  height: 49%;
  position: relative;
  @media screen and (max-width: 960px) {
    padding: 0% 7.5%;
    padding-bottom: 5%;
  }
`;
export const SectionFourImageSecondRow = styled.img`
  width: 85%;
  padding-bottom: 7.5%;
  margin-top: -0%;
  @media screen and (max-width: 960px) {
    display: block;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    overflow: hidden;
  }
`;
export const SectionFourTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding-bottom: 2.5%;
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;
export const SectionFourDescription = styled.div`
  font-size: 1.1rem;
  padding-bottom: 5%;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;
export const SectionFourLink = styled(Link)`
  background-color: #b01f24;
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.875rem;
  @media screen and (max-width: 960px) {
    background-color: #b01f24;
    font-size: 0.75rem;
    padding: 10px 10px;
    margin-left: 0%;
    height: 0%;
  }
`;

export const SectionFourWhiteColumn = styled.div`
  height: 100%;
  margin: auto;
  width: 100%;
  @media screen and (max-width: 960px) {
    padding-bottom: 7%;
  }
`;
export const SectionFourGreyColumn = styled.div`
  background-color: #404040;
  height: 100%;
  margin: auto;
  width: 100%;
  @media screen and (max-width: 960px) {
    background-color: #404040;
    height: 0%;
  }
`;

export const SectionFourImageContainer = styled.div`
  background-color: #404040;
`;

export const SectionFourGreyColumnImage = styled.div`
  @media screen and (max-width: 960px) {
    background: linear-gradient(0deg, white 50%, #404040 0%);
    height: 50%;
  }
`;

export const SectionFourColumnContainerRectangleFront = styled.div`
  height: 2.5rem;
  position: static;
  left: 20%;
  width: 35rem;
  position: absolute;
  z-index: 1;
  background-color: #b01f24;
  @media screen and (max-width: 960px) {
    height: 2.5rem;
    position: static;
    left: 40%;
    width: 13rem;
    position: absolute;
    z-index: 1;
    background-color: #b01f24;
  }
`;
