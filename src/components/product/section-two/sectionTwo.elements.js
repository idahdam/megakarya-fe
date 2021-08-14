import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  padding: 2.5% 10%;
  box-sizing: border-box;

  z-index: 1;
  width: 100%;
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 960px) {
    padding: 10% 15%;
  }
`;

export const SectionTwoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  grid-gap: 2.5px;
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const SectionTwoColumn = styled.div`
  min-height: 100px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const SectionTwoCard = styled.div`
  transition: 0.3s;
  width: 95%;
  padding-bottom: 3%;
  background-color: #e8e8e8;
  margin: 5% 0%;
`;

export const SectionTwoImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const SectionTwoTextContainer = styled.div`
  padding: 3% 7.5%;
`;

export const SectionTwoTitleCard = styled.div`
  padding-top: 3%;
  padding-bottom: 1.5%;
  text-align: left;
  font-weight: bold;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    font-size: 1.125rem;
  }
`;

export const SectionTwoDescCard = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
  padding-top: 1.5%;
  padding-bottom: 3%;
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;
export const SectionTwoPriceCard = styled.div`
  padding-bottom: 5%;
  font-weight: 600;
  font-size: 1.1rem;
  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;
export const SectionTwoButtonCard = styled.a`
  background-color: #40ac3e;
  border: none;
  color: white;
  margin-bottom: 5%;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.875rem;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    padding: 10px 20px;
    background-color: #40ac3e;
    font-size: 0.75rem;
    height: 0%;
  }
`;
