import { gatewayHelper } from "../utils";

const getAllContactUsComponents = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "footer", body);
  return response;
};

export const footerService = {
  getAllContactUsComponents,
};
