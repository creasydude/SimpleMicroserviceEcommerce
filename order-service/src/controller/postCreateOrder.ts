import { injectServiceInterface } from "../interfaces/injectService.interface";

import { httpRequestInterface } from "../interfaces/http.interface";
export default function makePostCreateOrder({
  service,
}: injectServiceInterface) {
  return async function postCreateOrder(httpRequest: httpRequestInterface) {
    const orderInfo = {
      body: httpRequest.body,
      headers: httpRequest.headers,
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
        statusCode: 201,
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
