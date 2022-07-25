import {
  createProduct,
  updateProduct,
  deleteProduct,
  showProduct,
  showProducts,
  searchProduct,
} from "../use-cases";
import makePostCreateProduct from "./postCreateProduct";
import makePostUpdateProduct from "./postUpdateProduct";
import makeDeleteDeleteProduct from "./deleteDeleteProduct";
import makeGetShowProducts from "./getShowProducts";
import makeGetShowProduct from "./getShowProduct";
import makeGetSearchProduct from "./getSearchProduct";

const postCreateProduct = makePostCreateProduct({ createProduct });
const postUpdateProduct = makePostUpdateProduct({ updateProduct });
const deleteDeleteProduct = makeDeleteDeleteProduct({ deleteProduct });
const getShowProducts = makeGetShowProducts({ showProducts });
const getShowProduct = makeGetShowProduct({ showProduct });
const getSearchProduct = makeGetSearchProduct({ searchProduct });

const productController = Object.freeze({
  postCreateProduct,
  postUpdateProduct,
  deleteDeleteProduct,
  getShowProducts,
  getShowProduct,
  getSearchProduct,
});
export default productController;
export {
  postCreateProduct,
  postUpdateProduct,
  deleteDeleteProduct,
  getShowProducts,
  getShowProduct,
  getSearchProduct,
};
