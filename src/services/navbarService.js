import { gatewayHelper } from "../utils";

const getWhatsappLink = async () => {
  const body = {};
  const response = await gatewayHelper.http("GET", "navbar", body);
  return response;
};

export const navbarService = {
  getWhatsappLink,
};
