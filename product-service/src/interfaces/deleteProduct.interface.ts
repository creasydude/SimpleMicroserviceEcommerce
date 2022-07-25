import { makeProductInterface } from "./product.interface";

interface deleteProductInterface {
  deleteProduct: (productInfo : makeProductInterface) => Promise<any>;
}

export { deleteProductInterface };
