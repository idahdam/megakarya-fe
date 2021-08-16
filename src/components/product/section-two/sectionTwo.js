import React from "react";
import {
  SectionTwoColumn,
  // SectionTwoRow,
  SectionTwoCard,
  SectionTwoImage,
  SectionTwoDescCard,
  SectionTwoPriceCard,
  SectionTwoContainer,
  SectionTwoTitleCard,
  SectionTwoButtonCard,
  SectionTwoTextContainer,
} from "./sectionTwo.elements";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const SectionTwo = ({ products, link }) => {
  if (products.length === 0) return null;
  return (
    <SectionTwoContainer>
      {/* <SectionTwoRow> */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
                  <SectionTwoPriceCard>{product.price}</SectionTwoPriceCard>
                  <SectionTwoButtonCard href={`https://${link}`}>
                    OFFER
                  </SectionTwoButtonCard>
                </SectionTwoTextContainer>
              </SectionTwoCard>
            </SectionTwoColumn>
          );
        })}
      </Masonry>
      {/* </SectionTwoRow> */}
    </SectionTwoContainer>
  );
};

export default SectionTwo;
