import React from "react";
import {
  SectionOneContainer,
  SectionOneThumbnail,
  SectionOneImage,
  SectionOneCaption,
  SectionOneTitle,
  SectionOneDescription,
} from "./sectionOne.elements";
const SectionOne = ({ object }) => {
  return (
    <SectionOneContainer>
      <SectionOneThumbnail>
        <SectionOneImage src={object.image.url} alt="vision" loading="lazy" />
        <SectionOneCaption>
          <SectionOneTitle>{object.title}</SectionOneTitle>
          <SectionOneDescription>{object.description}</SectionOneDescription>
        </SectionOneCaption>
      </SectionOneThumbnail>
    </SectionOneContainer>
  );
};

export default SectionOne;
