import React, { useState, useEffect } from "react";
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
  SectionFourGreyColumnImage,
  SectionFourColumnContainerRectangleFront,
} from "./sectionFour.elements";
import office from "../../../assets/main/office.png";

const SectionFour = () => {
  const [position, setPosition] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPosition(false);
      console.log("mobile!");
    } else {
      setPosition(true);
      console.log("desktop!");
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      {position ? (
        <SectionFourContainer>
          <SectionFourRow>
            <SectionFourColumn>
              <SectionFourImageFirstRow
                src={office}
                alt="office"
                loading="lazy"
              />
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourTextSecondRow>
                  <SectionFourTitle>
                    Product, Lorem ipsum dolor sit amet, consectetur elit.
                  </SectionFourTitle>
                  <SectionFourDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum
                    odio vel neque nisi velit. Aliquam pellentesque lobortis.
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
                    Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum
                    odio vel neque nisi velit. Aliquam pellentesque lobortis.
                  </SectionFourDescription>
                  <SectionFourLink to="/portfolio">LEARN MORE</SectionFourLink>
                </SectionFourTextFirstRow>
              </SectionFourWhiteColumn>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourImageSecondRow
                  src={office}
                  alt="office"
                  loading="lazy"
                />
              </SectionFourGreyColumn>
            </SectionFourColumn>
          </SectionFourRow>
          <SectionFourColumnContainerRectangleFront></SectionFourColumnContainerRectangleFront>
        </SectionFourContainer>
      ) : (
        <SectionFourContainer>
          <SectionFourRow>
            <SectionFourColumn>
              <SectionFourImageFirstRow
                src={office}
                alt="office"
                loading="lazy"
              />
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourTextSecondRow>
                  <SectionFourTitle>
                    Product, Lorem ipsum dolor sit amet, consectetur elit.
                  </SectionFourTitle>
                  <SectionFourDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum
                    odio vel neque nisi velit. Aliquam pellentesque lobortis.
                  </SectionFourDescription>
                  <SectionFourLink to="/product">LEARN MORE</SectionFourLink>
                </SectionFourTextSecondRow>
              </SectionFourGreyColumn>
            </SectionFourColumn>
          </SectionFourRow>
          <SectionFourRow>
            <SectionFourColumn>
              <SectionFourGreyColumnImage>
                <SectionFourColumnContainerRectangleFront></SectionFourColumnContainerRectangleFront>
                <SectionFourImageSecondRow
                  src={office}
                  alt="office"
                  loading="lazy"
                />
              </SectionFourGreyColumnImage>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourWhiteColumn>
                <SectionFourTextFirstRow>
                  <SectionFourTitle>
                    Portfolio Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </SectionFourTitle>
                  <SectionFourDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisi urna, eu, sit orci nulla malesuada nunc. Bibendum
                    odio vel neque nisi velit. Aliquam pellentesque lobortis.
                  </SectionFourDescription>
                  <SectionFourLink to="/portfolio">LEARN MORE</SectionFourLink>
                </SectionFourTextFirstRow>
              </SectionFourWhiteColumn>
            </SectionFourColumn>
          </SectionFourRow>
        </SectionFourContainer>
      )}
    </>
  );
};

export default SectionFour;
