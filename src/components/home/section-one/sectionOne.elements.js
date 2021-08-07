import styled from "styled-components";
// import { Container } from "../../../globalStyles";

export const SectionOneContainer = styled.div`
  width: 100%;
  margin-bottom: -2rem;
  @media screen and (max-width: 960px) {
    padding-bottom: 10%;
  }
`;

export const SectionOneColumnContainer = styled.div`
  padding-left: 32%;
  padding-top: 15%;
  width: 60%;
  @media screen and (max-width: 960px) {
    padding: 5% 5%;
    font-size: 2rem;
    width: 85%;
    margin: auto;
  }
`;

export const SectionOneRow = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const SectionOneColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 960px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SectionOneTitle = styled.div`
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
export const SectionOneDescription = styled.div`
  text-align: left;
  font-size: 1rem;
  padding-top: 1%;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    width: 100%;
  }
`;

export const SectionOneColumnImage = styled.img`
  padding-left: 2.5%;
  padding-top: 5%;
  max-width: 75%;
  height: 350px;
  object-fit: cover;
  z-index: -1;
  display: flex;
  @media screen and (max-width: 960px) {
    padding-left: 0%;
    padding-top: 0%;
    font-size: 1rem;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const SectionOneColumnContainerTwo = styled.div`
  height: 100%;
  @media screen and (max-width: 960px) {
    height: 100%;
    padding-top: 0%;
  }
`;

export const SectionOneColumnContainerRectangleBack = styled.div`
  width: 15rem;
  margin-top: -20rem;
  height: 36rem;
  left: 12.5rem;
  bottom: 10rem;
  margin-bottom: -10rem;
  background-color: #cfcfcf;
  position: relative;
  z-index: -2;
`;

export const SectionOneColumnContainerImage = styled.div`
  position: relative;
  z-index: -1;
`;
export const SectionOneColumnContainerRectangleFront = styled.div`
  height: 2.5rem;
  position: relative;
  top: 25em;
  left: 5rem;
  width: 19rem;
  display: flex;
  background-color: #b01f24;
  @media screen and (max-width: 960px) {
    position: relative;
    top: 16.5em;
    left: 6rem;
    margin-top: -2.5rem;
    height: 2.5rem;
    width: 15rem;
  }
`;
