import {
  createOrder,
  showOrders,
  showOrder,
  showUserOrders,
} from "../use-cases";
import makePostCreateOrder from "./postCreateOrder";
import makeGetShowOrders from "./getShowOrders";
import makeGetShowOrder from "./getShowOrder";
import makeGetShowUserOrders from "./getShowUserOrders";

const postCreateOrder = makePostCreateOrder({ service: createOrder });
const getShowOrders = makeGetShowOrders({ service: showOrders });
const getShowOrder = makeGetShowOrder({ service: showOrder });
const getShowUserOrders = makeGetShowUserOrders({ service: showUserOrders });

const orderController = Object.freeze({
  postCreateOrder,
  getShowOrders,
  getShowOrder,
  getShowUserOrders,
});
export default orderController;
export { postCreateOrder, getShowOrders, getShowOrder, getShowUserOrders };
