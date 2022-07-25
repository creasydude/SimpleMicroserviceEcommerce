import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { searchProductInterface } from "../interfaces/searchProduct.interface";

export default function makeGetSearchProduct({
    searchProduct,
}: searchProductInterface) {
  return async function getSearchProduct(httprequest: httpRequestInterface) {
    try {
      const productInfo = {
        body : httprequest.body,
        query : httprequest.query
      };
      const products = await searchProduct(productInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
            products,
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
