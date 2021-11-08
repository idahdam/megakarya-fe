import { gatewayHelper } from "../utils";

const getAllSeo = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "seo", body);
  return response;
};

export const seoService = {
  getAllSeo,
};
