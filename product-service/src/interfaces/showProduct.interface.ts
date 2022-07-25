interface productInfoInterface {
  body: any;
  params: any;
}

interface showProductInterface {
  showProduct: (productInfo: productInfoInterface) => Promise<any>;
}

export { showProductInterface };
