import { makeProductInterface } from "./product.interface";

interface createProductInterface {
  createProduct: (productInfo : makeProductInterface) => Promise<any>;
}

export { createProductInterface };
