import React, { useState, useEffect } from "react";
import SectionOne from "../../components/portfolio/section-one/sectionOne";
import SectionFour from "../../components/portfolio/section-four/sectionFour";
import SectionTwo from "../../components/portfolio/section-two/sectionTwo";
import SectionThree from "../../components/portfolio/section-three/sectionThree";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// services
import { portfolioService } from "../../services/portfolioService";
import { navbarService } from "../../services/navbarService";

const Portfolio = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  let [loading] = useState(true);
  const [data, setData] = useState(null);
  const [contact, setContact] = useState(null);
  let [color] = useState("#b01f24");
  useEffect(() => {
    const fetchData = async () => {
      const response = await portfolioService.getAllPortfolioComponents();
      setData(response.data);
    };
    const fetchContact = async () => {
      const response = await navbarService.getWhatsappLink();
      setContact(response.data);
    };

    fetchData();
    fetchContact();
  }, [contact]);

  if (data === null || contact === null)
    return (
      <center>
        <BeatLoader color={color} loading={loading} css={override} size={15} />
      </center>
    );
  return (
    <>
      <SectionOne object={data.HeroPortfolio} />
      <SectionTwo object={data.client} />
      <SectionThree object={data.testimony} />
      <SectionFour object={data.FooterHero} link={contact.whatsappLink} />
    </>
  );
};

export default Portfolio;
