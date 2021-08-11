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

const SectionFour = ({ objectOne, objectTwo }) => {
  const [position, setPosition] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setPosition(false);
    } else {
      setPosition(true);
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
                src={objectOne.image.url}
                alt="office"
                loading="lazy"
              />
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourTextSecondRow>
                  <SectionFourTitle>{objectOne.title}</SectionFourTitle>
                  <SectionFourDescription>
                    {objectOne.description}
                  </SectionFourDescription>
                  <SectionFourLink to="/product">
                    {objectOne.button_title}
                  </SectionFourLink>
                </SectionFourTextSecondRow>
              </SectionFourGreyColumn>
            </SectionFourColumn>
          </SectionFourRow>
          <SectionFourRow>
            <SectionFourColumn>
              <SectionFourWhiteColumn>
                <SectionFourTextFirstRow>
                  <SectionFourTitle>{objectTwo.title}</SectionFourTitle>
                  <SectionFourDescription>
                    {objectTwo.description}
                  </SectionFourDescription>
                  <SectionFourLink to="/portfolio">
                    {objectTwo.button_title}
                  </SectionFourLink>
                </SectionFourTextFirstRow>
              </SectionFourWhiteColumn>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourImageSecondRow
                  src={objectTwo.image.url}
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
                src={objectOne.image.url}
                alt="office"
                loading="lazy"
              />
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourGreyColumn>
                <SectionFourTextSecondRow>
                  <SectionFourTitle>{objectOne.title}</SectionFourTitle>
                  <SectionFourDescription>
                    {objectOne.description}
                  </SectionFourDescription>
                  <SectionFourLink to="/product">
                    {objectOne.button_title}
                  </SectionFourLink>
                </SectionFourTextSecondRow>
              </SectionFourGreyColumn>
            </SectionFourColumn>
          </SectionFourRow>
          <SectionFourRow>
            <SectionFourColumn>
              <SectionFourGreyColumnImage>
                <SectionFourColumnContainerRectangleFront></SectionFourColumnContainerRectangleFront>
                <SectionFourImageSecondRow
                  src={objectOne.image.url}
                  alt="office"
                  loading="lazy"
                />
              </SectionFourGreyColumnImage>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourWhiteColumn>
                <SectionFourTextFirstRow>
                  <SectionFourTitle>{objectTwo.title}</SectionFourTitle>
                  <SectionFourDescription>
                    {objectTwo.description}
                  </SectionFourDescription>
                  <SectionFourLink to="/portfolio">
                    {objectTwo.button_title}
                  </SectionFourLink>
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
