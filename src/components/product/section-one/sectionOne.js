import React from "react";
import {
  SectionOneContainer,
  SectionOneThumbnail,
  SectionOneImage,
  SectionOneCaption,
  SectionOneTitle,
  SectionOneDescription,
} from "./sectionOne.elements";
const SectionOne = ({ hero }) => {
  return (
    <SectionOneContainer>
      <SectionOneThumbnail>
        <SectionOneImage src={hero.image.url} alt="vision" loading="lazy" />
        <SectionOneCaption>
          <SectionOneTitle>{hero.title}</SectionOneTitle>
          <SectionOneDescription>{hero.description}</SectionOneDescription>
        </SectionOneCaption>
      </SectionOneThumbnail>
    </SectionOneContainer>
  );
};

export default SectionOne;
