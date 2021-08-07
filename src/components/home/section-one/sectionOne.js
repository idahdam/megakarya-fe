import React, { useState, useEffect } from "react";
import {
  SectionOneContainer,
  SectionOneRow,
  SectionOneTitle,
  SectionOneColumn,
  SectionOneDescription,
  SectionOneColumnContainer,
  SectionOneColumnContainerTwo,
  SectionOneColumnImage,
  SectionOneColumnContainerImage,
  SectionOneColumnContainerRectangleFront,
  SectionOneColumnContainerRectangleBack,
} from "./sectionOne.elements";
import hero from "../../../assets/main/hero.png";
const SectionOne = () => {
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
    <SectionOneContainer>
      <SectionOneRow>
        {position ? (
          <>
            {/* Desktop */}
            <SectionOneColumn>
              <SectionOneColumnContainer>
                <SectionOneTitle>
                  Lorem ipsum dolor sit amet, Consectetur.
                </SectionOneTitle>
                <SectionOneDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </SectionOneDescription>
              </SectionOneColumnContainer>
            </SectionOneColumn>
            <SectionOneColumn>
              <SectionOneColumnContainerTwo>
                <SectionOneColumnContainerRectangleFront></SectionOneColumnContainerRectangleFront>
                <SectionOneColumnContainerImage>
                  <SectionOneColumnImage
                    src={hero}
                    alt="hero-one"
                    loading="lazy"
                  />
                </SectionOneColumnContainerImage>
                <SectionOneColumnContainerRectangleBack></SectionOneColumnContainerRectangleBack>
              </SectionOneColumnContainerTwo>
            </SectionOneColumn>
          </>
        ) : (
          <>
            {/* HP */}
            <SectionOneColumn>
              <SectionOneColumnContainerTwo>
                <SectionOneColumnContainerRectangleFront></SectionOneColumnContainerRectangleFront>
                <SectionOneColumnImage
                  src={hero}
                  alt="hero-one"
                  loading="lazy"
                />
              </SectionOneColumnContainerTwo>
            </SectionOneColumn>
            <SectionOneColumn>
              <SectionOneColumnContainer>
                <SectionOneTitle>
                  Lorem ipsum dolor sit amet, Consectetur.
                </SectionOneTitle>
                <SectionOneDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </SectionOneDescription>
              </SectionOneColumnContainer>
            </SectionOneColumn>
          </>
        )}
      </SectionOneRow>
    </SectionOneContainer>
  );
};

export default SectionOne;
