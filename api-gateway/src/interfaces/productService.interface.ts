interface createProductInterface {
  productName: string;
  productDescription: string;
  productPrice: string;
}

interface updateProductInterface {
  _id: string;
  productName?: string;
  productDescription?: string;
  productPrice?: string;
}

interface deleteProductInterface {
  _id: string;
}

interface showProductsInterface {
  sort?: string;
}

interface showProductInterface {
  _id: string;
}

interface searchProductInterface {
  keyword : string;
}

export {
  createProductInterface,
  updateProductInterface,
  deleteProductInterface,
  showProductsInterface,
  showProductInterface,
  searchProductInterface,
};
