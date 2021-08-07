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
  padding: 12.5% 10%;
`;
export const SectionFourTextFirstRow = styled.div`
  padding: 10%;
`;
export const SectionFourImageSecondRow = styled.img`
  width: 85%;
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
  font-size: 1.75rem;
  padding-bottom: 2.5%;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
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
  font-size: 1rem;
  @media screen and (max-width: 960px) {
    background-color: #b01f24;
    font-size: 0.75rem;
    height: 0%;
  }
`;

export const SectionFourWhiteColumn = styled.div``;
export const SectionFourGreyColumn = styled.div`
  background-color: #404040;
  height: 100%;
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
  position: relative;
  bottom: 24em;
  left: 10rem;
  width: 30rem;
  display: flex;
  background-color: #b01f24;
  z-index: 1;
  @media screen and (max-width: 960px) {
    margin: 0 auto;
    top: 1.25rem;
    height: 2rem;
    bottom: 5rem;
    left: 5rem;
    width: 10rem;
    display: block;
  }
`;
