import { gatewayHelper } from "../utils";

const getAllHomeComponents = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "home-page", body);
  return response;
};

export const homeService = {
  getAllHomeComponents,
};
