import React, { useState, useEffect } from "react";
import {
  SectionFourContainer,
  SectionFourRow,
  SectionFourTitle,
  SectionFourColumn,
  SectionFourDescription,
  SectionFourColumnContainer,
  SectionFourColumnContainerTwo,
  SectionFourColumnImage,
  SectionFourColumnContainerImage,
  SectionFourColumnContainerRectangleFront,
  SectionFourColumnContainerRectangleBack,
  SectionFourLink,
} from "./sectionFour.elements";
import hero from "../../../assets/main/hero.png";

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
    <SectionFourContainer>
      <SectionFourRow>
        {position ? (
          <>
            {/* Desktop */}
            <SectionFourColumn>
              <SectionFourColumnContainerTwo>
                <SectionFourColumnContainerRectangleFront></SectionFourColumnContainerRectangleFront>
                <SectionFourColumnContainerImage>
                  <SectionFourColumnImage
                    src={hero}
                    alt="hero-one"
                    loading="lazy"
                  />
                </SectionFourColumnContainerImage>
                <SectionFourColumnContainerRectangleBack></SectionFourColumnContainerRectangleBack>
              </SectionFourColumnContainerTwo>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourColumnContainer>
                <SectionFourTitle>
                  Product Lorem, Ipsum Sit Dolor
                </SectionFourTitle>
                <SectionFourDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </SectionFourDescription>
                <SectionFourLink to="/product">CONTACT US</SectionFourLink>
              </SectionFourColumnContainer>
            </SectionFourColumn>
          </>
        ) : (
          <>
            {/* HP */}
            <SectionFourColumn>
              <SectionFourColumnContainerTwo>
                <SectionFourColumnContainerRectangleFront></SectionFourColumnContainerRectangleFront>
                <SectionFourColumnImage
                  src={hero}
                  alt="hero-one"
                  loading="lazy"
                />
                <SectionFourColumnContainerRectangleBack></SectionFourColumnContainerRectangleBack>
              </SectionFourColumnContainerTwo>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourColumnContainer>
                <SectionFourTitle>
                  Product Lorem, Ipsum Sit Dolor
                </SectionFourTitle>
                <SectionFourDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </SectionFourDescription>
                <SectionFourLink to="/product">CONTACT US</SectionFourLink>
              </SectionFourColumnContainer>
            </SectionFourColumn>
          </>
        )}
      </SectionFourRow>
    </SectionFourContainer>
  );
};

export default SectionFour;
