import buildMakeOrder from "./order";
import orderIdGenerator from "../helpers/orderIdGenerator";

const makeOrder = buildMakeOrder({orderIdGenerator});

export default makeOrder;