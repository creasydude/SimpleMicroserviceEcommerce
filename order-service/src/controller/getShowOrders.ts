import { httpRequestInterface } from "../interfaces/http.interface";
import { injectServiceInterface } from "../interfaces/injectService.interface";

export default function makeGetShowOrders({ service }: injectServiceInterface) {
  return async function getShowOrders(httpRequest: httpRequestInterface) {
    const orderInfo = {
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
