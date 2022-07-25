import logger from "../helpers/Logger";
import { deleteProductInterface } from "../interfaces/deleteProduct.interface";
import { httpRequestInterface } from "../interfaces/http.interface";

export default function makeDeleteDeleteProduct({
  deleteProduct,
}: deleteProductInterface) {
  return async function deleteDeleteProduct(httprequest: httpRequestInterface) {
    try {
      //@ts-ignore
      const productInfo = httprequest.params;
      const deletedProduct = await deleteProduct(productInfo);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
            message: "Deleted",
            deletedProduct,
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
