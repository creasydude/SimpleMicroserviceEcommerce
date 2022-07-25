import { ProductService } from "../../../services";
import { ResolverContext } from "../../../interfaces/express.interface";
import {
  searchProductArgsInterface,
  showProductArgsInterface,
  showProductsArgsInterface,
} from "../../../interfaces/schema.interface";

const showProducts = async (
  parent: any,
  args: showProductsArgsInterface,
  context: ResolverContext
) => {
  try {
    const productInfo = args?.input;
    if (productInfo?.sort) {
      const { data, status } = await ProductService.showProducts({
        sort: productInfo.sort,
      });
      const products = data.products;
      return {
        status,
        products,
      };
    } else {
      const { data, status } = await ProductService.showProducts({});
      const products = data.products;
      return {
        status,
        products,
      };
    }
  } catch (err) {
    throw err;
  }
};

const showProduct = async (
  parent: any,
  args: showProductArgsInterface,
  context: ResolverContext
) => {
  try {
    const { _id } = args.input;
    const { data, status } = await ProductService.showProduct({ _id });
    const product = data.product;
    return {
      status,
      ...product,
    };
  } catch (err) {
    throw err;
  }
};

const searchProduct = async (
  parent: any,
  args: searchProductArgsInterface,
  context: ResolverContext
) => {
  try {
    const keyword = args?.input?.keyword;
    const { data, status } = await ProductService.searchProduct({ keyword });
    const products = data.products;
    return {
        status,
        products
    }
  } catch (err) {
    throw err;
  }
};

export { showProducts, showProduct, searchProduct };
