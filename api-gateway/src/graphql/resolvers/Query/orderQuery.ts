import e from "express";
import { ResolverContext } from "../../../interfaces/express.interface";
import {
  showOrderArgsInterface,
  showOrderByUserArgsInterface,
  showOrdersArgsInterface,
} from "../../../interfaces/schema.interface";
import { OrderService } from "../../../services";

const showOrders = async (
  parents: any,
  args: showOrdersArgsInterface,
  context: ResolverContext
) => {
  try {
    const orderInfo = args.input;
    if (orderInfo?.filter) {
      const { data, status } = await OrderService.showOrders({
        filter: orderInfo.filter,
      });
      const orders = data.orders;
      return {
        status,
        orders,
      };
    } else {
      const { data, status } = await OrderService.showOrders({});
      const orders = data.orders;
      return {
        status,
        orders,
      };
    }
  } catch (err) {
    throw err;
  }
};

const showOrder = async (
  parents: any,
  args: showOrderArgsInterface,
  context: ResolverContext
) => {
  try {
    const orderId = args.input.orderId;
    const { data, status } = await OrderService.showOrder({ orderId });
    const order = data.order;
    return {
      status,
      ...order,
    };
  } catch (err) {
    throw err;
  }
};

const showOrderByUser = async (
  parents: any,
  args: showOrderByUserArgsInterface,
  context: ResolverContext
) => {
  try {
    const orderInfo = args.input;
    const UserID = context.req.session?.userId;
    if (!UserID)
      throw new Error(
        "Authorization Header Not Found In Request , Please Insert Authorization AccessToken Header In Request"
      );
    if (orderInfo?.filter) {
      const filter = orderInfo.filter;
      const { data, status } = await OrderService.showOrderByUser({
        filter,
        UserID,
      });
      const orders = data.orders;
      return {
        status,
        orders,
      };
    } else {
      const { data, status } = await OrderService.showOrderByUser({UserID});
      const orders = data.orders;
      return {
        status,
        orders,
      };
    }
  } catch (err) {
    throw err;
  }
};

export { showOrders, showOrder, showOrderByUser };
