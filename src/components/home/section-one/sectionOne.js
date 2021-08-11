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

const SectionOne = ({ title, description, image }) => {
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
    <SectionOneContainer>
      <SectionOneRow>
        {position ? (
          <>
            {/* Desktop */}
            <SectionOneColumn>
              <SectionOneColumnContainer>
                <SectionOneTitle>{title}</SectionOneTitle>
                <SectionOneDescription>{description}</SectionOneDescription>
              </SectionOneColumnContainer>
            </SectionOneColumn>
            <SectionOneColumn>
              <SectionOneColumnContainerTwo>
                <SectionOneColumnContainerRectangleFront></SectionOneColumnContainerRectangleFront>
                <SectionOneColumnContainerImage>
                  <SectionOneColumnImage
                    src={image}
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
                  src={image}
                  alt="hero-one"
                  loading="lazy"
                />
              </SectionOneColumnContainerTwo>
            </SectionOneColumn>
            <SectionOneColumn>
              <SectionOneColumnContainer>
                <SectionOneTitle>
                  <SectionOneTitle>{title}</SectionOneTitle>
                </SectionOneTitle>
                <SectionOneDescription>{description}</SectionOneDescription>
              </SectionOneColumnContainer>
            </SectionOneColumn>
          </>
        )}
      </SectionOneRow>
    </SectionOneContainer>
  );
};

export default SectionOne;
