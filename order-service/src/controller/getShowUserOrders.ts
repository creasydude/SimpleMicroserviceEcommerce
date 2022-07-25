import { injectServiceInterface } from "../interfaces/injectService.interface";

import { httpRequestInterface } from "../interfaces/http.interface";
export default function makeGetShowUserOrders({
  service,
}: injectServiceInterface) {
  return async function getShowUserOrders(httpRequest: httpRequestInterface) {
    const orderInfo = {
      headers: httpRequest.headers,
      query: httpRequest.query,
    };
    try {
      const orders = await service(orderInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          orders,
        },
        statusCode: 200,
      };
    } catch (err) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          message: (err as Error).message,
        },
        statusCode: 400,
      };
    }
  };
}
