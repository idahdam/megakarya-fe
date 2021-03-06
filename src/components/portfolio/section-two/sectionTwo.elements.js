import styled from "styled-components";
// import { ImageOverlay } from "react-image-overlay-effect";

export const SectionTwoContainer = styled.div`
  padding: 2.5% 0%;
  padding-bottom: 2.5%;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;
export const SectionTwoLine = styled.hr`
  border: 0;
  height: 3px;
  margin: 0% 15%;
  margin-bottom: 1%;
  padding: 0% 0%;
  background: #9f9f9f;
  background: linear-gradient(to right, #b01f24 20%, #9f9f9f 20% 80%);
  @media screen and (max-width: 960px) {
    margin: 0 6%;
    margin-top: 6%;
    margin-bottom: 2%;
    background: linear-gradient(to right, #b01f24 10%, #9f9f9f 10% 80%);
  }
`;

export const SectionTwoTitle = styled.div`
  padding-left: 15%;
  padding-bottom: 3%;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
    padding-left: 6%;
    padding-bottom: 5%;
    text-align: left;
  }
`;

export const SectionTwoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;
  max-width: 1366px;
  @media screen and (max-width: 960px) {
    padding: 0 9%;
  }
`;

export const SectionTwoColumn = styled.div`
  flex: 20%;
  margin: 1% 0%;
  @media screen and (max-width: 960px) {
    flex: 10%;
    margin: 5px 0px;
  }
`;

export const SectionTwoClientName = styled.p`
  color: white;
`;

export const SectionTwoItemImage = styled.img`
  width: 12.5rem;
  height: 7.5rem;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: grayscale(100%);
  :hover {
    filter: none;
  }
  @media screen and (max-width: 960px) {
    flex: 50%;
    width: 140px;
  }
`;

export const SectionTwoItemImageEmpty = styled.div`
  width: 190px;
  background-color: #c4c4c4;
  height: 110px;
  margin: auto;
  @media screen and (max-width: 960px) {
    flex: 50%;
    width: 140px;
  }
`;
