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
  SectionFourWhiteColumn,
  SectionFourGreyColumn,
} from "./sectionFour.elements";
import office from "../../../assets/main/office.png";

const SectionFour = () => {
  return (
    <SectionFourContainer>
      <SectionFourRow>
        <SectionFourColumn>
          <SectionFourImageFirstRow src={office} alt="office" />
        </SectionFourColumn>
        <SectionFourColumn>
          <SectionFourGreyColumn>
            <SectionFourTextSecondRow>
              <SectionFourTitle>
                Product, Lorem ipsum dolor sit amet, consectetur elit.
              </SectionFourTitle>
              <SectionFourDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum odio
                vel neque nisi velit. Aliquam pellentesque lobortis.
              </SectionFourDescription>
              <SectionFourLink to="/product">LEARN MORE</SectionFourLink>
            </SectionFourTextSecondRow>
          </SectionFourGreyColumn>
        </SectionFourColumn>
      </SectionFourRow>
      <SectionFourRow>
        <SectionFourColumn>
          <SectionFourWhiteColumn>
            <SectionFourTextFirstRow>
              <SectionFourTitle>
                Portfolio Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </SectionFourTitle>
              <SectionFourDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum odio
                vel neque nisi velit. Aliquam pellentesque lobortis.
              </SectionFourDescription>
              <SectionFourLink to="/portfolio">LEARN MORE</SectionFourLink>
            </SectionFourTextFirstRow>
          </SectionFourWhiteColumn>
        </SectionFourColumn>
        <SectionFourColumn>
          <SectionFourGreyColumn>
            <SectionFourImageSecondRow src={office} alt="office" />
          </SectionFourGreyColumn>
        </SectionFourColumn>
      </SectionFourRow>
    </SectionFourContainer>
  );
};

export default SectionFour;
