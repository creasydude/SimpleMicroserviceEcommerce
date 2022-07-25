import { injectDb } from "../interfaces/db.interface";
import makeProduct from "../product";

export default function makeDeleteProduct({ ProductDb }: injectDb) {
  return async function deleteProduct(productInfo: any) {
    const pId = productInfo?.pId
    if (!pId) throw new Error("Enter Id");
    const p = makeProduct({_id : pId});
    const deleteProduct = await ProductDb.deleteOne({_id: p.getDocId()!});
    return deleteProduct;
  };
}
