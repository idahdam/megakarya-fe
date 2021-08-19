import styled from "styled-components";

export const SectionThreeBackground = styled.div`
  background-color: #e8e8e8;
  @media screen and (max-width: 960px) {
    padding-bottom: 3.5rem;
    margin-bottom: 0;
  }
`;
export const SectionThreeTitleContainer = styled.div`
  padding: 1.5% 0%;
  margin-top: -5rem;
  margin-bottom: 0;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  margin-left: auto;
  max-width: 1300px;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    margin-top: -5rem;
  }
`;

export const SectionThreeContainer = styled.div`
  padding: 2.5% 0%;
  margin-top: -1%;
  margin-bottom: 0;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  margin-left: auto;
  max-width: 1300px;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    margin-bottom: -3%;
    padding-top: 10%;
  }
`;
export const SectionThreeTitleMain = styled.div`
  padding-left: 17.5%;
  padding-bottom: 1%;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
    padding-left: 15%;
    padding-bottom: 3 %;
    text-align: left;
  }
`;
export const SectionThreeLine = styled.div`
  width: 3px;
  height: 100px;
  z-index: -1;
  transform: translate(200px, 85px);
  position: relative;
  background: linear-gradient(to bottom, #9f9f9f 25%, #b01f24 25%);
  @media screen and (max-width: 960px) {
    transform: translate(0, 0);
    left: 11%;
    bottom: -6rem;
  }
`;

export const SectionThreeTestimonyContainer = styled.div`
  height: 100%;
  padding: 0 1%;
  z-index: -1;
`;

export const SectionThreeColumnContainer = styled.div`
  padding-left: 23.5%;
  padding-top: 0%;
  width: 60%;
  margin: auto;
  @media screen and (max-width: 960px) {
    padding: 5% 5%;
    font-size: 2rem;
    width: 185%;
    padding-right: 10%;
    margin: auto;
  }
`;

export const SectionThreeRow = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: block;
    overflow: hidden;
  }
`;

export const SectionThreeColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 960px) {
    flex: 1;
    box-sizing: border-box;
  }
`;

export const SectionThreeTitle = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 1%;
  @media screen and (max-width: 960px) {
    padding-top: 5%;
    padding-bottom: 2.5%;
    font-size: 1.25rem;
    width: 100%;
  }
`;

export const SectionThreeJob = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  @media screen and (max-width: 960px) {
  }
`;
export const SectionThreeLineTestimony = styled.hr`
  background-color: #707070;
  margin: 3% 0%;
  margin-left: 1%;
  height: 2px;
  border: 0;
  width: 15%;
`;

export const SectionThreeDescription = styled.div`
  text-align: left;
  font-size: 1.1rem;
  width: 105%;
  color: #404040;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
    padding-bottom: 5%;
    width: 100%;
  }
`;

export const SectionThreeColumnImage = styled.img`
  padding-left: 2.5%;
  padding-top: 5%;
  padding-bottom: 5%;
  max-width: 75%;
  height: 345px;
  object-fit: cover;
  z-index: 10;
  position: relative;
  display: flex;
  @media screen and (max-width: 960px) {
    display: block;
    padding-left: 5%;
    padding-top: 0%;
    padding-bottom: 0%;
    font-size: 1rem;
    height: 15.5rem;
    object-fit: cover;
  }
`;

export const SectionThreeColumnContainerTwo = styled.div`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding-top: 0%;
    margin: 0 auto;
    margin-top: 1%;
  }
`;

export const SectionThreeColumnContainerImage = styled.div`
  position: relative;
  z-index: 0;
  @media screen and (max-width: 960px) {
    display: inline;
    width: 100%;
  }
`;

export const SectionThreeCarouselButton = styled.button`
  padding: 0 5%;
  background-color: #e8e8e8;
  border: transparent;
  cursor: pointer;
`;

export const SectionThreeMobileRow = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const SectionThreeMobileColumn = styled.div`
  float: left;
  width: 100%;
`;

export const SectionThreeMobileImageContainer = styled.div``;
export const SectionThreeMobileImage = styled.img`
  padding-left: 0%;
  font-size: 1rem;
  width: 100%;
  height: 15.5rem;
  object-fit: cover;
`;

export const SectionThreeMobileTextContainer = styled.div`
  padding: 0 2rem;
  padding-top: 1.5rem;
  margin-bottom: -1.5rem;
  @media screen and (max-width: 960px) {
    padding: 1.5rem 2rem;
  }
`;
