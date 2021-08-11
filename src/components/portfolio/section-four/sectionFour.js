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

const SectionFour = ({ object }) => {
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
                    src={object.image.url}
                    alt="hero-one"
                    loading="lazy"
                  />
                </SectionFourColumnContainerImage>
                <SectionFourColumnContainerRectangleBack></SectionFourColumnContainerRectangleBack>
              </SectionFourColumnContainerTwo>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourColumnContainer>
                <SectionFourTitle>{object.title}</SectionFourTitle>
                <SectionFourDescription>
                  {object.description}
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
                  src={object.image.url}
                  alt="hero-one"
                  loading="lazy"
                />
                <SectionFourColumnContainerRectangleBack></SectionFourColumnContainerRectangleBack>
              </SectionFourColumnContainerTwo>
            </SectionFourColumn>
            <SectionFourColumn>
              <SectionFourColumnContainer>
                <SectionFourTitle>{object.title}</SectionFourTitle>
                <SectionFourDescription>
                  {object.description}
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
