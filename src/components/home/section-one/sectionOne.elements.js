import styled from "styled-components";
// import { Container } from "../../../globalStyles";

export const SectionOneContainer = styled.div`
  width: 100%;
  margin-bottom: -2rem;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    padding-bottom: 10%;
  }
`;

export const SectionOneColumnContainer = styled.div`
  width: 70%;
  padding-left: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 960px) {
    position: static;
    padding-left: 0%;
    padding-top: 0%;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
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
    overflow: hidden;
  }
`;

export const SectionOneColumn = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 960px) {
    position: static;
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
  font-size: 1.1rem;
  padding-top: 1%;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-weight: 600;
    padding-bottom: 1%;
    font-size: 0.9rem;
    width: 100%;
  }
`;

export const SectionOneColumnImage = styled.img`
  max-width: 100%;
  height: 350px;
  object-fit: cover;
  z-index: -1;
  display: flex;

  vertical-align: top;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transform: scale(1.1);
  }

  @media screen and (max-width: 960px) {
    padding-left: 0%;
    padding-top: 0%;
    font-size: 1rem;
    width: 100%;
    height: 15.5rem;
    object-fit: cover;

    &:hover {
      -moz-transform: scale(1);
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const SectionOneColumnContainerTwo = styled.div`
  height: 100%;
  transition: 1s all ease;
  @media screen and (max-width: 960px) {
    height: 100%;
    padding-top: 0%;
    min-width: 800px;
    margin: 0 auto;
    margin-top: 1%;
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
  z-index: 1;
  width: 80%;
  position: relative;
  border: 1px solid #333;
  overflow: hidden;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 2.5%;
  margin-left: 2.5%;
  @media screen and (max-width: 960px) {
    margin-top: 0%;
    margin-left: 0%%;
  }
`;
export const SectionOneColumnContainerRectangleFront = styled.div`
  height: 3rem;
  position: relative;
  top: 25em;
  left: 5rem;
  width: 19rem;
  display: flex;
  z-index: 2;
  background-color: #b01f24;
  @media screen and (max-width: 960px) {
    top: 16.5em;
    left: 6rem;
    margin-top: -3rem;
    height: 2rem;
    width: 30rem;
  }
`;
