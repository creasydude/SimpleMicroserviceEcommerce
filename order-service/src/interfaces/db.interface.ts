import { Schema, model } from "mongoose";

interface makeOrderDBInterface {
  Schema: typeof Schema;
  model: typeof model;
}

interface orderSchemaInterface {
  productId: string;
  userId: string;
  orderId: string;
  date: Date;
}

interface orderDBFuncInterface {
  findbyProp: ({
    prop,
    value,
  }: findbyPropInterface) => Promise<
    (orderSchemaInterface & { _id: any }) | null
  >;
  findById: ({
    _id,
  }: findByIdInterface) => Promise<
    (orderSchemaInterface & { _id: any }) | null
  >;
  insert: ({
    productId,
    userId,
    orderId,
  }: insertInterface) => Promise<orderSchemaInterface & { _id: any }>;
  update: ({
    _id,
    productId,
    userId,
    orderId,
  }: updateInterface) => Promise<any>;
  find: () => Promise<any>;
  aggregate: (options: any) => Promise<any[]>;
}

interface findbyPropInterface {
  prop: string;
  value: string;
}

interface findByIdInterface {
  _id: string;
}

interface insertInterface {
  productId: string;
  userId: string;
  orderId: string;
}

interface updateInterface {
  _id: string;
  productId?: string;
  userId?: string;
  orderId?: string;
}

interface deleteInterface {
  _id: string;
}

interface injectDb {
  orderDB: orderDBFuncInterface;
}

export {
  makeOrderDBInterface,
  orderSchemaInterface,
  findbyPropInterface,
  findByIdInterface,
  insertInterface,
  updateInterface,
  deleteInterface,
  injectDb,
};
