import React from "react";
import {
  SectionFourContainer,
  SectionFourRow,
  SectionFourColumn,
  SectionFourImageFirstRow,
  SectionFourTextSecondRow,
  SectionFourTextFirstRow,
  SectionFourImageSecondRow,
  SectionFourTitle,
  SectionFourDescription,
  SectionFourLink,
} from "./sectionFour.elements";

const SectionFour = () => {
  return (
    <SectionFourContainer>
      <SectionFourRow>
        <SectionFourColumn>
          <SectionFourImageFirstRow />
        </SectionFourColumn>
        <SectionFourColumn>
          <SectionFourTextSecondRow>
            <SectionFourTitle>
              Portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SectionFourTitle>
            <SectionFourDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              urna, eu, sit orci nulla malesuada nunc. Bibendum odio vel neque
              nisi velit. Aliquam pellentesque lobortis.
            </SectionFourDescription>
            <SectionFourLink></SectionFourLink>
          </SectionFourTextSecondRow>
        </SectionFourColumn>
      </SectionFourRow>
      <SectionFourRow>
        <SectionFourColumn>
          <SectionFourTextFirstRow>
            <SectionFourTitle>
              Portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SectionFourTitle>
            <SectionFourDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              urna, eu, sit orci nulla malesuada nunc. Bibendum odio vel neque
              nisi velit. Aliquam pellentesque lobortis.
            </SectionFourDescription>
            <SectionFourLink></SectionFourLink>
          </SectionFourTextFirstRow>
        </SectionFourColumn>
        <SectionFourColumn>
          <SectionFourImageSecondRow />
        </SectionFourColumn>
      </SectionFourRow>
    </SectionFourContainer>
  );
};

export default SectionFour;
