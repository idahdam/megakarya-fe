import React from "react";
import {
  SectionTwoContainer,
  SectionTwoThumbnail,
  SectionTwoImage,
  SectionTwoDescription,
  SectionTwoCaption,
  SectionTwoTitle,
} from "./sectionTwo.elements";

const SectionTwo = ({ title, description, image }) => {
  return (
    <SectionTwoContainer>
      <SectionTwoThumbnail>
        <SectionTwoImage src={image} alt="vision" loading="lazy" />
        <SectionTwoCaption>
          <SectionTwoTitle>{title}</SectionTwoTitle>
          <SectionTwoDescription>{description}</SectionTwoDescription>
        </SectionTwoCaption>
      </SectionTwoThumbnail>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
