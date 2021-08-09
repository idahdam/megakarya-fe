import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import {
  SectionThreeContainer,
  SectionThreeTitle,
  SectionThreeLine,
  SectionThreeLineTestimony,
  SectionThreeTestimonyContainer,
  SectionThreeRow,
  SectionThreeColumn,
  SectionThreeColumnContainer,
  SectionThreeDescription,
  SectionThreeColumnContainerTwo,
  SectionThreeColumnContainerImage,
  SectionThreeColumnImage,
  SectionThreeTitleMain,
  SectionThreeJob,
} from "./sectionThree.elements";
import hero from "../../../assets/main/hero.png";
const SectionThree = () => {
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
    <SectionThreeContainer>
      <SectionThreeLine></SectionThreeLine>
      <SectionThreeTitleMain>Testimony</SectionThreeTitleMain>
      <SectionThreeTestimonyContainer>
        <SectionThreeRow>
          {position ? (
            <>
              <Carousel plugins={["arrows", "infinite"]}>
                <>
                  <SectionThreeColumn>
                    <SectionThreeColumnContainer>
                      <SectionThreeTitle>
                        Theonaldo Vincentius Androdi
                      </SectionThreeTitle>
                      <SectionThreeJob>CEO of XYZ Company</SectionThreeJob>
                      <SectionThreeLineTestimony />
                      <SectionThreeDescription>
                        Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
                        lectus orci scelerisque volutpat. Enim, dolor dolor
                        tincidunt et mollis egestas. Urna eu porttitor ultrices
                        sed. Tellus urna porttitor a tristique ornare. Dolor.
                      </SectionThreeDescription>
                    </SectionThreeColumnContainer>
                  </SectionThreeColumn>
                  <SectionThreeColumn>
                    <SectionThreeColumnContainerTwo>
                      <SectionThreeColumnContainerImage>
                        <SectionThreeColumnImage
                          src={hero}
                          alt="hero-one"
                          loading="lazy"
                        />
                      </SectionThreeColumnContainerImage>
                    </SectionThreeColumnContainerTwo>
                  </SectionThreeColumn>
                </>
                <>
                  <SectionThreeColumn>
                    <SectionThreeColumnContainer>
                      <SectionThreeTitle>
                        Theonaldo Vincentius Androdi
                      </SectionThreeTitle>
                      <SectionThreeJob>CEO of XYZ Company</SectionThreeJob>
                      <SectionThreeLineTestimony />
                      <SectionThreeDescription>
                        Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
                        lectus orci scelerisque volutpat. Enim, dolor dolor
                        tincidunt et mollis egestas. Urna eu porttitor ultrices
                        sed. Tellus urna porttitor a tristique ornare. Dolor.
                      </SectionThreeDescription>
                    </SectionThreeColumnContainer>
                  </SectionThreeColumn>
                  <SectionThreeColumn>
                    <SectionThreeColumnContainerTwo>
                      <SectionThreeColumnContainerImage>
                        <SectionThreeColumnImage
                          src={hero}
                          alt="hero-one"
                          loading="lazy"
                        />
                      </SectionThreeColumnContainerImage>
                    </SectionThreeColumnContainerTwo>
                  </SectionThreeColumn>
                </>
              </Carousel>
            </>
          ) : (
            <>
              <SectionThreeColumn>
                <SectionThreeColumnContainerTwo>
                  <SectionThreeColumnContainerImage>
                    <SectionThreeColumnImage
                      src={hero}
                      alt="hero-one"
                      loading="lazy"
                    />
                  </SectionThreeColumnContainerImage>
                </SectionThreeColumnContainerTwo>
              </SectionThreeColumn>
              <SectionThreeColumn>
                <SectionThreeColumnContainer>
                  <SectionThreeTitle>
                    Theonaldo Vincentius Androdi
                  </SectionThreeTitle>
                  <SectionThreeJob>CEO of XYZ Company</SectionThreeJob>
                  <SectionThreeLineTestimony />
                  <SectionThreeDescription>
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sed
                    lectus orci scelerisque volutpat. Enim, dolor dolor
                    tincidunt et mollis egestas. Urna eu porttitor ultrices sed.
                    Tellus urna porttitor a tristique ornare. Dolor.
                  </SectionThreeDescription>
                </SectionThreeColumnContainer>
              </SectionThreeColumn>
            </>
          )}
        </SectionThreeRow>
      </SectionThreeTestimonyContainer>
    </SectionThreeContainer>
  );
};

export default SectionThree;
