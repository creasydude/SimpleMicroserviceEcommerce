import { injectDb } from "../interfaces/db.interface";

export default function makeShowOrder({ orderDB }: injectDb) {
  return async function showOrder(orderInfo: any) {
    const orderId = orderInfo.params?.orderId;
    const order = await orderDB.findbyProp({ prop: "orderId", value: orderId });
    return order;
  };
}
