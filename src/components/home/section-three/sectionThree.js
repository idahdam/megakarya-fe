import React from "react";
import {
  SectionThreeContainer,
  SectionThreeLine,
  SectionThreeColumn,
  SectionThreeTitle,
  SectionThreeRow,
  SectionThreeCard,
  SectionThreeTextContainer,
  SectionThreeImage,
  SectionThreeDescCard,
  SectionThreeTitleCard,
} from "./sectionThree.elements";
import card from "../../../assets/main/card.png";

const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <SectionThreeLine></SectionThreeLine>
      <SectionThreeTitle>What We Do?</SectionThreeTitle>
      <SectionThreeRow>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" loading="lazy" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" loading="lazy" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" loading="lazy" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" loading="lazy" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
      </SectionThreeRow>
    </SectionThreeContainer>
  );
};
export default SectionThree;
