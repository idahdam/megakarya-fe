import styled from "styled-components";

export const SectionThreeContainer = styled.div`
  padding: 2.5% 0%;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
`;
export const SectionThreeLine = styled.hr`
  border: 0;
  height: 3px;
  margin: 0% 15%;
  margin-bottom: 1%;
  padding: 0% 0%;
  background: #9f9f9f;
  background: linear-gradient(to right, #b01f24 20%, #9f9f9f 20% 80%);
  @media screen and (max-width: 960px) {
    margin: 0% 6%;
    margin-top: 6%;
    margin-bottom: 2%;
    background: linear-gradient(to right, #b01f24 10%, #9f9f9f 10% 80%);
  }
`;
export const SectionThreeColumn = styled.div`
  flex: 20%;
  padding: 15px;
  @media screen and (max-width: 960px) {
    padding: 0px;
    padding-bottom: 10%;
    flex: 50%;
  }
`;
export const SectionThreeTitle = styled.div`
  padding-left: 15%;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
    padding-left: 6%;
    padding-bottom: 5%;
    text-align: left;
  }
`;
export const SectionThreeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1% 7.5%;
  @media screen and (max-width: 960px) {
    padding: 1% 4.5%;
  }
`;

export const SectionThreeCard = styled.div`
  transition: 1.5s all ease;
  transition: 0.3s;
  padding-bottom: 3%;
  background-color: #e8e8e8;
  &:hover {
    transition: 1s all ease;
    transform: scale(1.05);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 960px) {
    padding-bottom: 3%;
    margin: auto;
    width: 90%;
    padding: 0px;
    &:hover {
      transform: scale(1);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1),
        0 6px 20px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

export const SectionThreeTextContainer = styled.div`
  padding: 2px 16px;
`;

export const SectionThreeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    height: 150px;
  }
`;

export const SectionThreeDescCard = styled.div`
  text-align: center;
  color: grey;
  font-weight: 500;
  font-size: 1.1rem;
  padding-top: 1.5%;
  padding-bottom: 3%;
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;

export const SectionTwoPriceCard = styled.div``;

export const SectionThreeTitleCard = styled.div`
  padding-top: 3%;
  padding-bottom: 1.5%;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;
