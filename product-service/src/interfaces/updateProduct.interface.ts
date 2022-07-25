import { makeProductInterface } from "./product.interface";

interface updateProductInterface {
  updateProduct: (productInfo: makeProductInterface) => Promise<any>;
}

export { updateProductInterface };
