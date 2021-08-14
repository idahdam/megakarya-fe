import React from "react";
import {
  SectionTwoContainer,
  SectionTwoLine,
  SectionTwoTitle,
  SectionTwoRow,
  SectionTwoColumn,
  SectionTwoItemImage,
  // SectionTwoClientName,
} from "./sectionTwo.elements";

const SectionTwo = ({ object }) => {
  if (object.length === 0) return null;
  return (
    <SectionTwoContainer>
      <SectionTwoLine></SectionTwoLine>
      <SectionTwoTitle>Our Clients</SectionTwoTitle>
      <SectionTwoRow>
        {object.map((data, index) => {
          return (
            <SectionTwoColumn>
              <SectionTwoItemImage src={data.company_logo.url} />
            </SectionTwoColumn>
          );
        })}
      </SectionTwoRow>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
