import {
  userDbFuncInterface,
  makeUserDbInterface,
  userSchemaInterface,
  findbyPropInterface,
  findByIdInterface,
  insertInterface,
  updateInterface,
} from "../interfaces/db.interface";

export default function makeUserDb({ Schema, model }: makeUserDbInterface) : userDbFuncInterface {
  //Schema Section
  const userSchema = new Schema<userSchemaInterface>({
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email"],
    },
    otp: {
      type: String,
      required: true,
      unique: true,
    },
    otpExpireDate: {
      type: Date,
      default: Date.now(),
    },
  });
  const User = model<userSchemaInterface>("User", userSchema);

  //Commands Section
  const findbyProp = async ({ prop, value }: findbyPropInterface) => {
    return await User.findOne({ [prop]: value });
  };

  const findById = async ({ _id }: findByIdInterface) => {
    return await User.findById(_id);
  };
  const insert = async ({ ...userInfo }: insertInterface) => {
    return await User.create({ ...userInfo });
  };
  const update = async ({ _id, ...userInfo }: updateInterface) => {
    return await User.findOneAndUpdate({ _id }, { ...userInfo }, {new: true});
  };

  return Object.freeze({
    findbyProp,
    findById,
    insert,
    update,
  });
}
