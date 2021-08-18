import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
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
  SectionThreeTitleContainer,
  SectionThreeBackground,
} from "./sectionThree.elements";
const SectionThree = ({ object }) => {
  if (object.length === 0) return null;
  return (
    <>
      <SectionThreeTitleContainer>
        <SectionThreeLine></SectionThreeLine>
        <SectionThreeTitleMain>Testimony</SectionThreeTitleMain>
      </SectionThreeTitleContainer>
      <SectionThreeBackground>
        <SectionThreeContainer>
          <SectionThreeTestimonyContainer>
            <SectionThreeRow>
              <Carousel
                plugins={[
                  {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: (
                        <SectionThreeCarouselButton>
                          <FiChevronLeft size={25} />
                        </SectionThreeCarouselButton>
                      ),
                      arrowLeftDisabled: (
                        <SectionThreeCarouselButton>
                          <FiChevronLeft size={25} color={"#808080"} />
                        </SectionThreeCarouselButton>
                      ),
                      arrowRight: (
                        <SectionThreeCarouselButton>
                          <FiChevronRight size={25} />
                        </SectionThreeCarouselButton>
                      ),
                      arrowRightDisabled: (
                        <SectionThreeCarouselButton>
                          <FiChevronRight size={25} color={"#808080"} />
                        </SectionThreeCarouselButton>
                      ),
                      addArrowClickHandler: true,
                    },
                  },
                ]}
              >
                {object.map((data, index) => {
                  return (
                    <>
                      <SectionThreeColumn>
                        <SectionThreeColumnContainer>
                          <SectionThreeTitle>{data.name}</SectionThreeTitle>
                          <SectionThreeJob>{data.position}</SectionThreeJob>
                          <SectionThreeLineTestimony />
                          <SectionThreeDescription>
                            {data.testimony}
                          </SectionThreeDescription>
                        </SectionThreeColumnContainer>
                      </SectionThreeColumn>
                      <SectionThreeColumn>
                        <SectionThreeColumnContainerTwo>
                          <SectionThreeColumnContainerImage>
                            <SectionThreeColumnImage
                              src={data.photo.url}
                              alt="hero-one"
                              loading="lazy"
                            />
                          </SectionThreeColumnContainerImage>
                        </SectionThreeColumnContainerTwo>
                      </SectionThreeColumn>
                    </>
                  );
                })}
              </Carousel>
            </SectionThreeRow>
          </SectionThreeTestimonyContainer>
        </SectionThreeContainer>
      </SectionThreeBackground>
    </>
  );
};

export default SectionThree;
