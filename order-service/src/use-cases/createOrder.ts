import { injectDb } from "../interfaces/db.interface";
import makeOrder from "../order";

export default function makeCreateOrder({ orderDB }: injectDb) {
  return async function createOrder(orderInfo: any) {
    const {headers , body} = orderInfo;
    const userId = headers.UserID;
    const productId = body.productId;
    if (!userId) throw new Error("Authorization Failed");
    if (!productId) throw new Error("Missing Credentials");
    const o = makeOrder({userId , productId});
    const order = await orderDB.insert({
        productId : o.getProductId()!,
        orderId: o.generateOrderId(),
        userId: o.getUserId()!
    })
    return order;
  };
}
