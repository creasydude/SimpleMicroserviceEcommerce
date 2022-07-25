import { injectDb } from "../interfaces/db.interface";
import { makeProductInterface } from "../interfaces/product.interface";
import makeProduct from "../product";

export default function makeCreateProduct({ ProductDb }: injectDb) {
  return async function createProduct(productInfo: makeProductInterface) {
    if (
      !productInfo.productDescription ||
      !productInfo.productName ||
      !productInfo.productPrice
    )
      throw new Error("Enter Credentials");
    const product = makeProduct(productInfo);
    const productExist = await ProductDb.findbyProp({
      prop: "productId",
      value: product.generateProductId(),
    });
    if (productExist) throw new Error("Product Exist");
    const createProduct = await ProductDb.insert({
      productId: product.generateProductId(),
      productName: product.getProductName()!,
      productDescription: product.getProductDescription()!,
      productPrice: product.getProductPrice()!,
    });
    return createProduct;
  };
}
