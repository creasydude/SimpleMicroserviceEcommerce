import { httpRequestInterface } from "../interfaces/http.interface";
import { injectServiceInterface } from "../interfaces/injectService.interface";

export default function makeGetShowOrder({ service }: injectServiceInterface) {
  return async function getShowOrder(httpRequest: httpRequestInterface) {
    const orderInfo = {
      params: httpRequest.params,
    };
    try {
      const order = await service(orderInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
            order,
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
