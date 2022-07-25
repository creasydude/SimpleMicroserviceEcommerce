import { orderDB } from "../data-access";
import makeCreateOrder from "./createOrder";
import makeShowOrders from "./showOrders";
import makeShowOrder from "./showOrder";
import makeShowUserOrders from "./showUserOrders";

const createOrder = makeCreateOrder({ orderDB });
const showOrders = makeShowOrders({ orderDB });
const showOrder = makeShowOrder({ orderDB });
const showUserOrders = makeShowUserOrders({ orderDB });

const orderService = Object.freeze({
  createOrder,
  showOrders,
  showOrder,
  showUserOrders,
});
export default orderService;
export { createOrder, showOrders, showOrder, showUserOrders };
