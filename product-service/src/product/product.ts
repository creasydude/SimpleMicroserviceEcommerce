import { makeProductInterface , buildMakeProductInterface, makeProductReturnInterface} from "../interfaces/product.interface"

export default function buildMakeProduct ({
    productIdGenerator
}: buildMakeProductInterface) {
    return function makeProduct ({
        _id,
        productName,
        productDescription,
        productPrice,
    } : makeProductInterface) : makeProductReturnInterface {
        //TODO: You can change number of productid
        const numOfGenerateProductId = 12;
        const gProductId = productIdGenerator(numOfGenerateProductId);


        return Object.freeze({
            getDocId: () => _id,
            generateProductId : () => gProductId,
            getProductName : () => productName,
            getProductDescription : () => productDescription,
            getProductPrice : () => productPrice
        })
    }
}