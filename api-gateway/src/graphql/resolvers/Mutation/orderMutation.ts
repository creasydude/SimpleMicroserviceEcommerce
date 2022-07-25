import { ResolverContext } from "../../../interfaces/express.interface";
import { createOrderArgsInterface } from "../../../interfaces/schema.interface";
import { OrderService } from "../../../services";

const createOrder = async (
  parent: any,
  args: createOrderArgsInterface,
  context: ResolverContext
) => {
  const UserID = context.req.session?.userId;
  if (!UserID)
    throw new Error(
      "Authorization Header Not Found In Request , Please Insert Authorization AccessToken Header In Request"
    );
  try {
    const productId = args.input?.productId;
    const { data, status } = await OrderService.createOrder({
      UserID,
      productId,
    });
    const order = data.order;
    return {
      status,
      ...order,
    };
  } catch (err) {
    throw err;
  }
};

export { createOrder };
