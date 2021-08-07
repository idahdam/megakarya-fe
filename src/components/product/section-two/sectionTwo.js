import React from "react";
import {
  SectionTwoContainer,
  SectionTwoRow,
  SectionTwoColumn,
  SectionTwoCard,
  SectionTwoImage,
  SectionTwoTextContainer,
  SectionTwoTitleCard,
  SectionTwoDescCard,
  SectionTwoButtonCard,
  SectionTwoPriceCard,
} from "./sectionTwo.elements";
import card from "../../../assets/main/card.png";

const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoRow>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
        <SectionTwoColumn>
          <SectionTwoCard>
            <SectionTwoImage src={card} alt="image" loading="lazy" />
            <SectionTwoTextContainer>
              <SectionTwoTitleCard>John Doe</SectionTwoTitleCard>
              <SectionTwoDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionTwoDescCard>
              <SectionTwoPriceCard>RpXX.XXX.XXX,-</SectionTwoPriceCard>
              <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
            </SectionTwoTextContainer>
          </SectionTwoCard>
        </SectionTwoColumn>
      </SectionTwoRow>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
