import React, { useState, useEffect } from "react";
import SectionOne from "../../components/product/section-one/sectionOne";
import SectionTwo from "../../components/product/section-two/sectionTwo";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// services
import { productService } from "../../services/productService";
import { navbarService } from "../../services/navbarService";

const Product = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  let [loading] = useState(true);
  const [hero, setHero] = useState(null);
  const [contact, setContact] = useState(null);
  const [products, setProducts] = useState([]);
  let [color] = useState("#b01f24");

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await productService.getAllProducts();
      setProducts(response.data);
    };
    const fetchHero = async () => {
      const response = await productService.getProductHero();
      setHero(response.data);
    };
    const fetchContact = async () => {
      const response = await navbarService.getWhatsappLink();
      setContact(response.data);
    };

    fetchAllProducts();
    fetchHero();
    fetchContact();
  }, []);
  if (hero === null || contact === null)
    return (
      <center>
        <BeatLoader color={color} loading={loading} css={override} size={15} />
      </center>
    );
  return (
    <>
      <SectionOne hero={hero.HeroProduct} />
      <SectionTwo products={products} link={contact.whatsappLink} />
    </>
  );
};

export default Product;
