import styled from "styled-components";

export const SectionThreeContainer = styled.div`
  padding: 2.5% 0%;
  margin-top: -1%;
  margin-bottom: 0;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    margin-bottom: -3%;
  }
`;
export const SectionThreeTitleMain = styled.div`
  padding-left: 16%;
  padding-bottom: 1%;
  font-weight: bold;
  font-size: 1.25rem;
  @media screen and (max-width: 960px) {
    padding-left: 6%;
    padding-bottom: 5%;
    text-align: left;
  }
`;
export const SectionThreeLine = styled.div``;
export const SectionThreeTestimonyContainer = styled.div`
  background-color: #e8e8e8;
  height: 100%;
  z-index: -1;
`;

export const SectionThreeColumnContainer = styled.div`
  padding-left: 23.5%;
  padding-top: 15%;
  width: 60%;
  margin: auto;
  @media screen and (max-width: 960px) {
    padding: 5% 5%;
    font-size: 2rem;
    width: 85%;
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
    width: 100%;
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
    font-size: 1.5rem;
    width: 100%;
  }
`;

export const SectionThreeJob = styled.div`
  font-size: 0.875rem;
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
  font-size: 1rem;
  width: 105%;
  color: #404040;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
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
    padding-left: 0%;
    padding-top: 0%;
    padding-bottom: 0%;
    font-size: 1rem;
    width: 100%;
    height: 15.5rem;
    object-fit: cover;
  }
`;

export const SectionThreeColumnContainerTwo = styled.div`
  height: 100%;
  @media screen and (max-width: 960px) {
    height: 100%;
    padding-top: 0%;
    min-width: 800px;
    margin: 0 auto;
    margin-top: 1%;
  }
`;

export const SectionThreeColumnContainerImage = styled.div`
  position: relative;
  z-index: 1;
`;
