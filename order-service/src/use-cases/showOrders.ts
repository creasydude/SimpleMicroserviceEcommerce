import { injectDb } from "../interfaces/db.interface";

export default function makeShowOrders({ orderDB }: injectDb) {
  return async function showOrders(orderInfo: any) {
    //query : filter => latest - oldest
    const query = orderInfo.query;
    if (query.filter === "latest") {
      const orders = await orderDB.aggregate([{ $sort: { date: -1 } }]);
      return orders;
    } else if (query.filter === "oldest") {
      const orders = await orderDB.aggregate([{ $sort: { date: 1 } }]);
      return orders;
    } else {
      const orders = await orderDB.find();
      return orders;
    }
  };
}
