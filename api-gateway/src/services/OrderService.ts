import {
  createOrderInterface,
  showOrderByUserInterface,
  showOrderInterface,
  showOrdersInterface,
} from "../interfaces/orderService.interface";
import { libraryHttpRequestInterface } from "../interfaces/service.interface";

const ORDER_SERVICE_API_URL = <string>process.env.ORDER_SERVICE_API_URL;

export default function makeOrderService({
  httpLibrary,
}: libraryHttpRequestInterface) {
  const req = httpLibrary.create({
    withCredentials: true,
    baseURL: ORDER_SERVICE_API_URL,
  });

  async function createOrder({ UserID, productId }: createOrderInterface) {
    const body = await req.post(
      "/order/create",
      { productId },
      { headers: { UserID } }
    );
    return body;
  }

  async function showOrders({ filter }: showOrdersInterface) {
    if (filter) {
      const body = await req.get(`/order/showAll?filter=${filter}`);
      return body;
    } else {
      const body = await req.get(`/order/showAll`);
      return body;
    }
  }

  async function showOrder({ orderId }: showOrderInterface) {
    const body = await req.get(`/order/show/${orderId}`);
    return body;
  }

  async function showOrderByUser({ filter, UserID }: showOrderByUserInterface) {
    if (filter) {
      const body = await req.get(`/order/showByUser?filter=${filter}`, {
        headers: { UserID },
      });
      return body;
    } else {
      const body = await req.get(`/order/showByUser`, { headers: { UserID } });
      return body;
    }
  }

  return Object.freeze({
    createOrder,
    showOrders,
    showOrder,
    showOrderByUser,
  });
}
