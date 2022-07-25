import { Document , Schema , model } from "mongoose";

interface makeUserDbInterface {
  Schema : typeof Schema;
  model : typeof model
}

interface userDbFuncInterface {
  findbyProp : ({prop  , value } : findbyPropInterface) => Promise<userSchemaInterface & {_id: any} | null>; 
  findById : ({_id} : findByIdInterface) => Promise<userSchemaInterface & {_id: any} | null>; 
  insert : ({email , otp , otpExpireDate} : insertInterface) => Promise<userSchemaInterface & {_id: any}>;  
  update : ({_id , email , otp , otpExpireDate} : updateInterface) => Promise<any>; 
}

interface userSchemaInterface extends Document {
  userId: string;
  email: string;
  otp: string;
  otpExpireDate: string | undefined;
}

interface findbyPropInterface {
  prop: string;
  value: string;
}

interface findByIdInterface {
  _id: string;
}

interface insertInterface {
  userId: string;
  email: string;
  otp: string;
  otpExpireDate: string;
}

interface updateInterface {
  _id: string;
  email?: string;
  otp?: string;
  otpExpireDate?: string;
}

interface injectDbInterface {
  userDb: userDbFuncInterface;
};

export {
  userDbFuncInterface,
  makeUserDbInterface,
  userSchemaInterface,
  findbyPropInterface,
  findByIdInterface,
  injectDbInterface,
  insertInterface,
  updateInterface,
};
