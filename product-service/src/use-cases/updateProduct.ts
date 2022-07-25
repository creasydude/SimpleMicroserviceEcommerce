import { injectDb } from "../interfaces/db.interface";
import { makeProductInterface } from "../interfaces/product.interface";
import makeProduct from "../product";

export default function makeUpdateProduct({ ProductDb }: injectDb) {
  return async function updateProduct(productInfo: makeProductInterface) {
    if (!productInfo._id) throw new Error("Enter Id");
    if (Object.keys(productInfo).length <= 1)
      throw new Error("At least enter one param for update");
    const p = makeProduct(productInfo);
    const updateProductObj: any = {
      productDescription: p.getProductDescription(),
      productName: p.getProductName(),
      productPrice: p.getProductPrice(),
    };
    Object.keys(updateProductObj).forEach(function (key) {
      if (updateProductObj[key] === undefined) delete updateProductObj[key];
    });
    const updateProduct = await ProductDb.update({
      _id: p.getDocId(),
      ...updateProductObj,
    });
    return updateProduct;
  };
}
