import React from "react";
import {
  SectionOneContainer,
  SectionOneThumbnail,
  SectionOneImage,
  SectionOneCaption,
  SectionOneTitle,
  SectionOneDescription,
} from "./sectionOne.elements";
import scenery from "../../../assets/portfolio/scenery.png";
const SectionOne = () => {
  return (
    <SectionOneContainer>
      <SectionOneThumbnail>
        <SectionOneImage src={scenery} alt="vision" loading="lazy" />
        <SectionOneCaption>
          <SectionOneTitle>
            Lorem ipsum dolor sit amet, consectetu adipiscing elit.
          </SectionOneTitle>
          <SectionOneDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus
            orci scelerisque volutpat. Enim, dolor dolor tincidunt et mollis
            egestas. Urna eu porttitor ultrices sed. Tellus urna porttitor a
            tristique ornare. Dolor.
          </SectionOneDescription>
        </SectionOneCaption>
      </SectionOneThumbnail>
    </SectionOneContainer>
  );
};

export default SectionOne;
