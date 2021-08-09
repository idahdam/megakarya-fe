import styled from "styled-components";

export const SectionOneContainer = styled.div`
  @media screen and (max-width: 960px) {
    margin-bottom: -0.25rem;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
  text-align: center;
  color: white;
  @media screen and (max-width: 960px) {
    text-align: left;
    transform: translate(-85%, -30%);
  }
`;

export const SectionOneDescription = styled.div`
  text-align: left;
  width: 60%;
  @media screen and (max-width: 960px) {
    width: 150%;
  }
`;
export const SectionOneTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  text-align: left;
  padding-bottom: 3%;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    width: 150%;
  }
`;
