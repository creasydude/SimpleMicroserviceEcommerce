import logger from "../helpers/Logger";
import { updateProductInterface } from "../interfaces/updateProduct.interface";
import { httpRequestInterface } from "../interfaces/http.interface";

export default function makePostUpdateProduct({
  updateProduct,
}: updateProductInterface) {
  return async function postUpdateProduct(httprequest: httpRequestInterface) {
    try {
      const productInfo = httprequest.body;
      const updatedProduct = await updateProduct(productInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          updatedProduct,
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
