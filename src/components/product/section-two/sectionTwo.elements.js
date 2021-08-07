import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  padding: 2.5% 20%;
  box-sizing: border-box;
`;

export const SectionTwoRow = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const SectionTwoColumn = styled.div`
  float: left;
  width: 33.33%;
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
`;

export const SectionTwoTextContainer = styled.div`
  padding: 2px 16px;
`;

export const SectionTwoTitleCard = styled.div`
  padding-top: 3%;
  padding-bottom: 1.5%;
  text-align: left;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const SectionTwoDescCard = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 1rem;
  padding-top: 1.5%;
  padding-bottom: 3%;
`;
export const SectionTwoPriceCard = styled.div`
  padding-bottom: 5%;
`;
export const SectionTwoButtonCard = styled.button`
  background-color: #40ac3e;
  border: none;
  color: white;
  margin-bottom: 5%;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    background-color: #40ac3e;
    font-size: 0.75rem;
    height: 0%;
  }
`;
