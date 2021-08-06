import styled from "styled-components";

export const SectionThreeContainer = styled.div`
  padding: 5% 0%;
  box-sizing: border-box;
`;
export const SectionThreeLine = styled.span``;
export const SectionThreeColumn = styled.div`
  flex: 20%;
  padding: 20px;
  @media screen and (max-width: 960px) {
    padding: 0px;
    padding-bottom: 10%;
    flex: 100%;
  }
`;
export const SectionThreeTitle = styled.div`
  padding-left: 16%;
  font-weight: bold;
  font-size: 1.25rem;
  @media screen and (max-width: 960px) {
    padding-left: 10%;
    text-align: left;
  }
`;
export const SectionThreeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5% 10%;
`;

export const SectionThreeCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const SectionThreeTextContainer = styled.div`
  padding: 2px 16px;
`;

export const SectionThreeImage = styled.img`
  width: 100%;
`;

export const SectionThreeDescCard = styled.div``;
export const SectionThreeTitleCard = styled.div``;
