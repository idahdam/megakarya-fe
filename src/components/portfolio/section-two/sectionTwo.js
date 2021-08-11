import React from "react";
import {
  SectionTwoContainer,
  SectionTwoLine,
  SectionTwoTitle,
  SectionTwoRow,
  SectionTwoColumn,
  SectionTwoItemImage,
  SectionTwoItemImageEmpty,
} from "./sectionTwo.elements";
import hero from "../../../assets/main/hero.png";

const SectionTwo = ({ object }) => {
  // if (object.length === 0) return null;
  return (
    <SectionTwoContainer>
      <SectionTwoLine></SectionTwoLine>
      <SectionTwoTitle>Our Clients</SectionTwoTitle>
      <SectionTwoRow>
        <SectionTwoColumn>
          <SectionTwoItemImage src={hero} />
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
        <SectionTwoColumn>
          {/* <SectionTwoItemImage src={hero} /> */}
          <SectionTwoItemImageEmpty></SectionTwoItemImageEmpty>
        </SectionTwoColumn>
      </SectionTwoRow>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
