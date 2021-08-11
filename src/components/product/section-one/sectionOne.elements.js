import styled from "styled-components";

export const SectionOneContainer = styled.div`
  z-index: 1;
  @media screen and (max-width: 960px) {
    padding-top: 0%;
  }
`;

export const SectionOneThumbnail = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100%;
`;

export const SectionOneImage = styled.img`
  display: block;
  width: 100%;
  height: 420px;
  @media screen and (max-width: 960px) {
    object-fit: cover;
    height: 500px;
  }
`;
export const SectionOneCaption = styled.div`
  width: 100%;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
  @media screen and (max-width: 960px) {
    text-align: left;
    width: 50%;
    transform: translate(-85%, -30%);
  }
`;

export const SectionOneDescription = styled.div`
  text-align: left;
  width: 65%;
  @media screen and (max-width: 960px) {
    width: 150%;
    font-size: 0.9rem;
  }
`;
export const SectionOneTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  text-align: left;
  width: 65%;
  padding-bottom: 3%;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    width: 150%;
  }
`;
