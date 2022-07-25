import { injectDb } from "../interfaces/db.interface";

export default function makeShowUserOrders({ orderDB }: injectDb) {
  return async function showUserOrders(orderInfo: any) {
    const userId = orderInfo.headers.UserID;
    const query = orderInfo.query;
    if (!userId) throw new Error("Authorization Failed");
    if (query.filter === "latest") {
      const orders = await orderDB.aggregate([
        {
          $match: {
            userId,
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
      ]);
      return orders;
    } else if (query.filter === "oldest") {
      const orders = await orderDB.aggregate([
        {
          $match: {
            userId,
          },
        },
        {
          $sort: {
            date: 1,
          },
        },
      ]);
      return orders;
    } else {
      const orders = await orderDB.aggregate([
        {
          $match: {
            userId,
          },
        },
      ]);
      return orders;
    }
  };
}
