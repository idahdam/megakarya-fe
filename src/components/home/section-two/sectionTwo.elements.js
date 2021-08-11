import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  @media screen and (max-width: 960px) {
    padding-top: 5%;
  }
`;
export const SectionTwoThumbnail = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100%;
  overflow: auto;
`;
export const SectionTwoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 500px;
  }
`;
export const SectionTwoCaption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  @media screen and (max-width: 960px) {
    text-align: left;
    transform: translate(-85%, -50%);
  }
`;

export const SectionTwoDescription = styled.div`
  @media screen and (max-width: 960px) {
    text-align: left;
    width: 150%;
  }
`;
export const SectionTwoTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 3%;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;
