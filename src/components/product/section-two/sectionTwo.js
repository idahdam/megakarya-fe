import React from "react";
import {
  SectionTwoColumn,
  SectionTwoRow,
  SectionTwoCard,
  SectionTwoImage,
  SectionTwoDescCard,
  SectionTwoPriceCard,
  SectionTwoContainer,
  SectionTwoTitleCard,
  SectionTwoButtonCard,
  SectionTwoTextContainer,
} from "./sectionTwo.elements";

const SectionTwo = ({ products, link }) => {
  if (products.length === 0) return null;
  return (
    <SectionTwoContainer>
      <SectionTwoRow>
        {products.map((product, index) => {
          return (
            <SectionTwoColumn>
              <SectionTwoCard>
                <SectionTwoImage
                  src={product.image.url}
                  alt="image"
                  loading="lazy"
                />
                <SectionTwoTextContainer>
                  <SectionTwoTitleCard>{product.name}</SectionTwoTitleCard>
                  <SectionTwoDescCard>{product.description}</SectionTwoDescCard>
                  <SectionTwoPriceCard>Rp{product.price}</SectionTwoPriceCard>
                  <SectionTwoButtonCard href={`https://${link}`}>
                    OFFER
                  </SectionTwoButtonCard>
                </SectionTwoTextContainer>
              </SectionTwoCard>
            </SectionTwoColumn>
          );
        })}
      </SectionTwoRow>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
