import React, { useState, useEffect } from "react";
import {
  SectionFourHref,
  SectionFourRow,
  SectionFourContainer,
  SectionFourTitle,
  SectionFourColumn,
  SectionFourDescription,
  SectionFourColumnContainer,
  SectionFourColumnContainerTwo,
  SectionFourColumnImage,
  SectionFourColumnContainerImage,
  SectionFourColumnContainerRectangleFront,
  SectionFourColumnContainerRectangleBack,
} from "./sectionFour.elements";

const SectionFour = ({ object, link }) => {
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
                <SectionFourHref href={`https://${link}`} target="_blank">
                  CONTACT US
                </SectionFourHref>
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
                <SectionFourHref href={`https://${link}`} target="_blank">
                  CONTACT US
                </SectionFourHref>
              </SectionFourColumnContainer>
            </SectionFourColumn>
          </>
        )}
      </SectionFourRow>
    </SectionFourContainer>
  );
};

export default SectionFour;
