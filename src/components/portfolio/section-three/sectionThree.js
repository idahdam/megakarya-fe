import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel";
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
  SectionThreeCarouselButton,
} from "./sectionThree.elements";
import hero from "../../../assets/main/hero.png";
const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <SectionThreeLine></SectionThreeLine>
      <SectionThreeTitleMain>Testimony</SectionThreeTitleMain>
      <SectionThreeTestimonyContainer>
        <SectionThreeRow>
          <Carousel
            plugins={[
              "infinite",
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <SectionThreeCarouselButton>
                      <AiOutlineArrowLeft size={25} />
                    </SectionThreeCarouselButton>
                  ),
                  arrowLeftDisabled: (
                    <SectionThreeCarouselButton>
                      <AiOutlineArrowLeft size={25} />
                    </SectionThreeCarouselButton>
                  ),
                  arrowRight: (
                    <SectionThreeCarouselButton>
                      <AiOutlineArrowRight size={25} />
                    </SectionThreeCarouselButton>
                  ),
                  arrowRightDisabled: (
                    <SectionThreeCarouselButton>
                      <AiOutlineArrowRight size={25} />
                    </SectionThreeCarouselButton>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
          >
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
                    tincidunt et mollis egestas. Urna eu porttitor ultrices sed.
                    Tellus urna porttitor a tristique ornare. Dolor.
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
                    tincidunt et mollis egestas. Urna eu porttitor ultrices sed.
                    Tellus urna porttitor a tristique ornare. Dolor.
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
        </SectionThreeRow>
      </SectionThreeTestimonyContainer>
    </SectionThreeContainer>
  );
};

export default SectionThree;
