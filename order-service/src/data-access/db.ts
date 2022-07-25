import {
  makeOrderDBInterface,
  orderSchemaInterface,
  deleteInterface,
  findByIdInterface,
  findbyPropInterface,
  insertInterface,
  updateInterface,
} from "../interfaces/db.interface";

export default function makeOrderDB({ Schema, model }: makeOrderDBInterface) {
  const orderSchema = new Schema<orderSchemaInterface>({
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    }
  });
  const Order = model<orderSchemaInterface>("Order", orderSchema);

  //Commands Section
  const findbyProp = async ({ prop, value }: findbyPropInterface) => {
    return await Order.findOne({ [prop]: value });
  };
  const findById = async ({ _id }: findByIdInterface) => {
    return await Order.findById(_id);
  };
  const insert = async ({ ...orderInfo }: insertInterface) => {
    return await Order.create({ ...orderInfo });
  };
  const update = async ({ _id, ...orderInfo }: updateInterface) => {
    return await Order.findOneAndUpdate(
      { _id },
      { ...orderInfo },
      { new: true }
    );
  };
  const find = async () => {
    return await Order.find();
  };
  const aggregate = async (options: any) => {
    return await Order.aggregate(options);
  };

  return Object.freeze({
    findbyProp,
    findById,
    insert,
    update,
    find,
    aggregate,
  });
}
