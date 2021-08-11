import { gatewayHelper } from "../utils";

const getProductHero = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "product-page", body);
  return response;
};

const getAllProducts = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "products", body);
  return response;
};

export const productService = {
  getAllProducts,
  getProductHero,
};
