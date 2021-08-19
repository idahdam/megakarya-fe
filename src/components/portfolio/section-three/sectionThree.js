import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel"; // for desktop
import "@brainhubeu/react-carousel/lib/style.css";
import Slider from "react-slick"; // for mobile
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
// import "react-magic-slider-dots/dist/magic-dots.css";
import "./dotsConfig.css";

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
  SectionThreeMobileRow,
  SectionThreeMobileColumn,
  SectionThreeMobileImageContainer,
  SectionThreeMobileImage,
  SectionThreeMobileTextContainer,
} from "./sectionThree.elements";
const SectionThree = ({ object }) => {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const settings = {
    //config for mobile
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return (
        <MagicSliderDots
          dots={dots}
          numDotsToShow={5}
          dotWidth={30}
          activeDotClassName="dotsActiveClass"
        />
      );
    },
  };

  <style></style>;

  window.addEventListener("resize", showButton);
  if (object.length === 0) return null;
  return (
    <>
      {button ? (
        // Desktop
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
      ) : (
        // Phone
        <>
          <SectionThreeTitleContainer>
            <SectionThreeLine></SectionThreeLine>
            <SectionThreeTitleMain>Testimony</SectionThreeTitleMain>
          </SectionThreeTitleContainer>
          <SectionThreeBackground>
            <Slider {...settings}>
              {object.slice(0, 5).map((data, index) => {
                return (
                  <>
                    <SectionThreeMobileRow>
                      <SectionThreeMobileColumn>
                        <SectionThreeMobileImageContainer>
                          <SectionThreeMobileImage
                            src={data.photo.url}
                            alt="hero-one"
                            loading="lazy"
                          />
                        </SectionThreeMobileImageContainer>
                      </SectionThreeMobileColumn>
                      <SectionThreeMobileColumn>
                        <SectionThreeMobileTextContainer>
                          <SectionThreeTitle>{data.name}</SectionThreeTitle>
                          <SectionThreeJob>{data.position}</SectionThreeJob>
                          <SectionThreeLineTestimony />
                          <SectionThreeDescription>
                            {data.testimony}
                          </SectionThreeDescription>
                        </SectionThreeMobileTextContainer>
                      </SectionThreeMobileColumn>
                    </SectionThreeMobileRow>
                  </>
                );
              })}
            </Slider>
          </SectionThreeBackground>
        </>
      )}
    </>
  );
};

export default SectionThree;
