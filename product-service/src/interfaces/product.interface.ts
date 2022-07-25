interface makeProductInterface {
    _id? : string;
    productName? : string;
    productDescription? : string;
    productPrice? : string;
};

interface buildMakeProductInterface {
    productIdGenerator: (num : number) => string;
}

interface makeProductReturnInterface {
    getDocId : () => string | undefined,
    generateProductId : () => string ,
    getProductName : () => string | undefined,
    getProductDescription : () => string | undefined,
    getProductPrice : () => string | undefined
}

export { makeProductInterface , buildMakeProductInterface , makeProductReturnInterface };
