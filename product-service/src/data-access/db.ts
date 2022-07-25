import {
  makeProductDbInterface,
  productSchemaInterface,
  findByIdInterface,
  findbyPropInterface,
  insertInterface,
  updateInterface,
  productDbFuncInterface,
  deleteInterface,
} from "../interfaces/db.interface";

export default function makeProductDb({
  Schema,
  model,
}: makeProductDbInterface): productDbFuncInterface {
  const productSchema = new Schema<productSchemaInterface>({
    productId: {
      type: String,
      unique: true,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
  });

  productSchema.index({
    productName: "text",
    productDescription: "text",
    productId: "text",
  });
  const Product = model<productSchemaInterface>("Product", productSchema);

  //Commands Section
  const findbyProp = async ({ prop, value }: findbyPropInterface) => {
    return await Product.findOne({ [prop]: value });
  };
  const findById = async ({ _id }: findByIdInterface) => {
    return await Product.findById(_id);
  };
  const insert = async ({ ...productInfo }: insertInterface) => {
    return await Product.create({ ...productInfo });
  };
  const update = async ({ _id, ...productInfo }: updateInterface) => {
    return await Product.findOneAndUpdate(
      { _id },
      { ...productInfo },
      { new: true }
    );
  };
  const deleteOne = async ({ _id }: deleteInterface) => {
    return await Product.findByIdAndRemove(_id);
  };
  const find = async () => {
    return await Product.find();
  };
  const aggregate = async (options: any) => {
    return await Product.aggregate(options);
  };

  return Object.freeze({
    findbyProp,
    findById,
    insert,
    update,
    deleteOne,
    find,
    aggregate,
  });
}
