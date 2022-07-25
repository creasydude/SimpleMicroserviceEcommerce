import { injectDb } from "../interfaces/db.interface";

export default function makeShowProducts({ ProductDb }: injectDb) {
  return async function showProducts(productInfo: any) {
    const sortOptions = ["lowerPrice", "upperPrice", "nameAZ", "nameZA"];
    const sortQueryResults = productInfo?.query?.sort;
    if (Object.keys(productInfo.query).length === 0) {
      const products = await ProductDb.find();
      return products;
    } else if (sortQueryResults === sortOptions[0]) {
      const products = ProductDb.aggregate([
        {
          $sort: { productPrice: 1 },
        },
      ]);
      return products;
    } else if (sortQueryResults === sortOptions[1]) {
      const products = ProductDb.aggregate([
        {
          $sort: { productPrice: -1 },
        },
      ]);
      return products;
    } else if (sortQueryResults === sortOptions[2]) {
      const products = ProductDb.aggregate([
        {
          $sort: { productName: 1 },
        },
      ]);
      return products;
    } else if (sortQueryResults === sortOptions[3]) {
      const products = ProductDb.aggregate([
        {
          $sort: { productName: -1 },
        },
      ]);
      return products;
    } else {
      throw new Error("Invalid Query");
    }
  };
}
