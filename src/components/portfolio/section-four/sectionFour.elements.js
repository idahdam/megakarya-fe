import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionFourContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    padding-bottom: 10%;
  }
`;

export const SectionFourColumnContainer = styled.div`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 960px) {
    position: static;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
    padding-left: 0%;
    padding-top: 1%;
    font-size: 2rem;
    width: 85%;
    margin: auto;
  }
`;

export const SectionFourRow = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: block;
    overflow: hidden;
  }
`;

export const SectionFourColumn = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 960px) {
    position: static;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SectionFourTitle = styled.div`
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
    padding-bottom: 2.5%;
    font-size: 1.5rem;
    width: 100%;
  }
`;
export const SectionFourDescription = styled.div`
  text-align: left;
  font-size: 1rem;
  padding-top: 1%;
  font-weight: 500;
  padding-bottom: 5%;
  @media screen and (max-width: 960px) {
    padding-bottom: 5%;
    font-size: 0.9rem;
    width: 100%;
  }
`;

export const SectionFourColumnImage = styled.img`
  padding-left: 20%;
  padding-top: 5%;
  max-width: 75%;
  height: 350px;
  object-fit: cover;
  z-index: -1;
  display: flex;
  @media screen and (max-width: 960px) {
    padding-left: 0%;
    padding-top: 5rem;
    max-width: 100%;
    height: 15.5rem;
    object-fit: cover;
  }
`;

export const SectionFourColumnContainerTwo = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 960px) {
    height: 100%;
    padding-top: 0%;
    margin: 0 auto;
    margin-top: 1%;
  }
`;

export const SectionFourColumnContainerRectangleBack = styled.div`
  width: 15rem;
  margin-top: -19.5rem;
  height: 36rem;
  left: 15rem;
  bottom: 10rem;
  margin-bottom: -10rem;
  background-color: #cfcfcf;
  position: relative;
  z-index: -2;
  @media screen and (max-width: 960px) {
    bottom: 10rem;
    width: 10rem;
    height: 30rem;
    left: 2.5rem;
  }
`;

export const SectionFourColumnContainerImage = styled.div`
  width: 100%;
  position: relative;
  z-index: -1;
  position: relative;
`;
export const SectionFourColumnContainerRectangleFront = styled.div`
  height: 2.5rem;
  position: relative;
  top: 3.75em;
  left: 18rem;
  width: 19rem;
  display: flex;
  background-color: #b01f24;
  @media screen and (max-width: 960px) {
    top: 6em;
    left: 1rem;
    display: block;
    margin-top: -3rem;
    height: 2rem;
    width: 13rem;
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
    padding: 10px 15px;
    font-size: 0.75rem;
    height: 0%;
  }
`;

export const SectionFourHref = styled.a`
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
    padding: 10px 15px;
    font-size: 0.75rem;
    height: 0%;
  }
`;
