import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { showProductInterface } from "../interfaces/showProduct.interface";

export default function makeGetShowProduct({
    showProduct,
}: showProductInterface) {
  return async function getShowProduct(httprequest: httpRequestInterface) {
    try {
      const productInfo = {
        body : httprequest.body,
        params : httprequest.params
      };
      const product = await showProduct(productInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
            product,
        },
      };
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        logger.error((err as Error).message)
      }
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          message: (err as Error).message,
        },
      };
    }
  };
}
