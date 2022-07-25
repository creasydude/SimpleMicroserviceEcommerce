import {
  createProductInterface,
  updateProductInterface,
  deleteProductInterface,
  showProductsInterface,
  showProductInterface,
  searchProductInterface,
} from "../interfaces/productService.interface";
import { libraryHttpRequestInterface } from "../interfaces/service.interface";

const PRODUCT_SERVICE_API_URL = <string>process.env.PRODUCT_SERVICE_API_URL;

export default function makeProductService({
  httpLibrary,
}: libraryHttpRequestInterface) {
  const req = httpLibrary.create({
    withCredentials: true,
    baseURL: PRODUCT_SERVICE_API_URL,
  });

  async function createProduct({
    productName,
    productDescription,
    productPrice,
  }: createProductInterface) {
    const body = await req.post("/product/create", {
      productName,
      productDescription,
      productPrice,
    });
    return body;
  }

  async function updateProduct({ ...productInfo }: updateProductInterface) {
    const body = await req.post("/product/update", {
      ...productInfo,
    });
    return body;
  }

  async function deleteProduct({ _id }: deleteProductInterface) {
    const body = await req.delete(`/product/delete/${_id}`);
    return body;
  }

  async function showProducts({ sort }: showProductsInterface) {
    if (sort) {
      const body = await req.get(`/product/showAll?sort=${sort}`);
      return body;
    } else {
      const body = await req.get(`/product/showAll`);
      return body;
    }
  }

  async function showProduct({ _id }: showProductInterface) {
    const body = await req.get(`/product/show/${_id}`);
    return body;
  }

  async function searchProduct({ keyword }: searchProductInterface) {
    const body = await req.get(`/product/search?s=${keyword}`);
    return body;
  }

  return Object.freeze({
    createProduct,
    updateProduct,
    deleteProduct,
    showProducts,
    showProduct,
    searchProduct,
  });
}
