import makeProduct from "../product";
import { injectDb } from "../interfaces/db.interface";

export default function makeShowProduct({ ProductDb }: injectDb) {
  return async function showProduct(productInfo: any) {
    const prodId = productInfo?.params?.productId
    if (!prodId) throw new Error("No params found");
    const p = makeProduct({_id : prodId});
    const product = ProductDb.findById({_id : p.getDocId()!})
    return product;
  };
}
