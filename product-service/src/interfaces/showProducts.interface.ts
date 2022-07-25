interface productInfoInterface {
  body: any;
  query: any;
}

interface showProductsInterface {
  showProducts: (productInfo: productInfoInterface) => Promise<any>;
}

export { showProductsInterface };
