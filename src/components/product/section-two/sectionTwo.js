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

const SectionTwo = ({ products }) => {
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
                  <SectionTwoButtonCard>OFFER</SectionTwoButtonCard>
                </SectionTwoTextContainer>
              </SectionTwoCard>
            </SectionTwoColumn>
          );
        })}
        {/* <SectionTwoColumn>
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
        </SectionTwoColumn> */}
      </SectionTwoRow>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
