import { makeOrderInterface , makeOrderReturnInterface, buildMakeOrderInterface } from "../interfaces/order.interface"

export default function buildMakeOrder ({orderIdGenerator} : buildMakeOrderInterface) {
    return function makeOrder ({userId , productId} : makeOrderInterface) : makeOrderReturnInterface {
        const orderIDNum = 8
        const gOrderId = orderIdGenerator(orderIDNum);
        return Object.freeze({
            generateOrderId: () => gOrderId,
            getUserId : () => userId,
            getProductId : () => productId
        })
    }
}