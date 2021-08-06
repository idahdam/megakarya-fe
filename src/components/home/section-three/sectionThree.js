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
            <SectionThreeImage src={card} alt="Avatar" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>Architect & Engineer</SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>Architect & Engineer</SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>Architect & Engineer</SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
        <SectionThreeColumn>
          <SectionThreeCard>
            <SectionThreeImage src={card} alt="Avatar" />
            <SectionThreeTextContainer>
              <SectionThreeTitleCard>John Doe</SectionThreeTitleCard>
              <SectionThreeDescCard>Architect & Engineer</SectionThreeDescCard>
            </SectionThreeTextContainer>
          </SectionThreeCard>
        </SectionThreeColumn>
      </SectionThreeRow>
    </SectionThreeContainer>
  );
};
export default SectionThree;
