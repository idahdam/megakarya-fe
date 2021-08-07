import React from "react";
import {
  SectionTwoContainer,
  SectionTwoThumbnail,
  SectionTwoImage,
  SectionTwoDescription,
  SectionTwoCaption,
  SectionTwoTitle,
} from "./sectionTwo.elements";
import vision from "../../../assets/main/vision.png";

const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoThumbnail>
        <SectionTwoImage src={vision} alt="vision" />
        <SectionTwoCaption>
          <SectionTwoTitle>Vision</SectionTwoTitle>
          <SectionTwoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            integer tempus neque non eget tristique nunc nullam. Nulla
            scelerisque consectetur nullam enim curabitur. Cras nam aenean
            bibendum viverra tortor lacinia morbi sapien. Vitae eu, blandit est
            et eu aenean. Vestibulum dignissim dui ut dignissim proin tempor,
            eu, nulla.{" "}
          </SectionTwoDescription>
        </SectionTwoCaption>
      </SectionTwoThumbnail>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
