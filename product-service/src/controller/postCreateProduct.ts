import logger from "../helpers/Logger";
import { createProductInterface } from "../interfaces/createProduct.interface";
import { httpRequestInterface } from "../interfaces/http.interface";

export default function makePostCreateProduct({
  createProduct,
}: createProductInterface) {
  return async function postCreateProduct(httprequest: httpRequestInterface) {
    try {
      const productInfo = httprequest.body;
      const createdProduct = await createProduct(productInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {
          createdProduct,
        },
      };
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        logger.error((err as Error).message);
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
