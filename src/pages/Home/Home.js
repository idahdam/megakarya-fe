import React, { useState, useEffect } from "react";
import SectionFour from "../../components/home/section-four/sectionFour";
import SectionOne from "../../components/home/section-one/sectionOne";
import SectionThree from "../../components/home/section-three/sectionThree";
import SectionTwo from "../../components/home/section-two/sectionTwo";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// services
import { homeService } from "../../services/homeService";

export const Home = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  let [loading] = useState(true);
  const [data, setData] = useState(null);
  let [color] = useState("#b01f24");
  useEffect(() => {
    const fetchData = async () => {
      const response = await homeService.getAllHomeComponents();
      setData(response.data);
    };

    fetchData();
  }, []);
  if (data === null)
    return (
      <center>
        <BeatLoader color={color} loading={loading} css={override} size={15} />
      </center>
    );
  return (
    <>
      <SectionOne
        title={data.HeroHomepage.title}
        description={data.HeroHomepage.description}
        image={data.HeroHomepage.image.url}
      />
      <SectionTwo
        title={data.Vision.title}
        description={data.Vision.description}
        image={data.Vision.image.url}
      />
      <SectionThree objects={data.WhatWeDo} />
      <SectionFour objectOne={data.ToProduct} objectTwo={data.ToPortfolio} />
    </>
  );
};
