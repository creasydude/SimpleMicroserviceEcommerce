import { ProductDb } from "../data-access";
import makeCreateProduct from "./createProduct";
import makeUpdateProduct from "./updateProduct";
import makeDeleteProduct from "./deleteProduct";
import makeShowProducts from "./showProducts";
import makeShowProduct from "./showProduct";
import makeSearchProduct from "./searchProduct";

const createProduct = makeCreateProduct({ ProductDb });
const updateProduct = makeUpdateProduct({ ProductDb });
const deleteProduct = makeDeleteProduct({ ProductDb });
const showProducts = makeShowProducts({ ProductDb });
const showProduct = makeShowProduct({ ProductDb });
const searchProduct = makeSearchProduct({ ProductDb });

const productService = Object.freeze({
  createProduct,
  updateProduct,
  deleteProduct,
  showProducts,
  showProduct,
  searchProduct,
});

export default productService;
export {
  createProduct,
  updateProduct,
  deleteProduct,
  showProducts,
  showProduct,
  searchProduct,
};
