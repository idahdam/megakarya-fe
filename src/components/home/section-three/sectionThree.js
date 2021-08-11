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

const SectionThree = ({ objects }) => {
  return (
    <SectionThreeContainer>
      <SectionThreeLine></SectionThreeLine>
      <SectionThreeTitle>What We Do?</SectionThreeTitle>
      <SectionThreeRow>
        {objects.map((object, index) => {
          return (
            <SectionThreeColumn>
              <SectionThreeCard>
                <SectionThreeImage
                  src={object.image.url}
                  alt="Avatar"
                  loading="lazy"
                />
                <SectionThreeTextContainer>
                  <SectionThreeTitleCard>{object.title}</SectionThreeTitleCard>
                  <SectionThreeDescCard>
                    {object.description}
                  </SectionThreeDescCard>
                </SectionThreeTextContainer>
              </SectionThreeCard>
            </SectionThreeColumn>
          );
        })}
        {/* <SectionThreeColumn>
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
        </SectionThreeColumn> */}
      </SectionThreeRow>
    </SectionThreeContainer>
  );
};
export default SectionThree;
