import { injectDb } from "../interfaces/db.interface";

export default function makeSearchProduct({ ProductDb }: injectDb) {
  return async function searchProduct(productInfo: any) {
    const search = productInfo?.query?.s;
    if (!search) throw new Error("Enter Keywords");
    const products = await ProductDb.aggregate([
        {
            $match : {
                $text : {
                    $search : search
                }
            }
        }
    ])
    return products;
  };
}
