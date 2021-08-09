import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  padding: 2.5% 0%;
  margin-top: -1%;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;
export const SectionTwoLine = styled.div``;
export const SectionTwoTitle = styled.div`
  padding-left: 16%;
  font-weight: bold;
  font-size: 1.25rem;
  @media screen and (max-width: 960px) {
    padding-left: 6%;
    padding-bottom: 5%;
    text-align: left;
  }
`;

export const SectionTwoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 17.5%;
  @media screen and (max-width: 960px) {
    padding: 0 5%;
  }
`;

export const SectionTwoColumn = styled.div`
  flex: 20%;
  margin: 20px 0%;
  @media screen and (max-width: 960px) {
    flex: 10%;
    margin: 5px 0px;
  }
`;

export const SectionTwoItemImage = styled.img`
  width: 160px;
  height: 110px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    flex: 50%;
  }
`;

export const SectionTwoItemImageEmpty = styled.div`
  width: 160px;
  background-color: #c4c4c4;
  height: 110px;
  margin: auto;
`;
