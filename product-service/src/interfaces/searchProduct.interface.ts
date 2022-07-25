interface productInfoInterface {
    body: any;
    query: any;
  }
  
  interface searchProductInterface {
    searchProduct: (productInfo: productInfoInterface) => Promise<any>;
  }
  
  export { searchProductInterface };
  