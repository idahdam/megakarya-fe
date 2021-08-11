import { gatewayHelper } from "../utils";

const getAllPortfolioComponents = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "portfolio-page", body);
  return response;
};

export const portfolioService = {
  getAllPortfolioComponents,
};
