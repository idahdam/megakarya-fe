import React from "react";
import {
  SectionThreeContainer,
  SectionThreeLine,
  SectionThreeColumn,
  SectionThreeTitle,
  SectionThreeRow,
} from "./sectionThree.elements";

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <SectionThreeLine></SectionThreeLine>
      <SectionThreeTitle>What We Do?</SectionThreeTitle>
      <SectionThreeRow>
        <SectionThreeColumn></SectionThreeColumn>
      </SectionThreeRow>
    </SectionThreeContainer>
  );
};
export default SectionThree;
