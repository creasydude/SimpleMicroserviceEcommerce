import { Schema, model } from "mongoose";

interface makeProductDbInterface {
  Schema: typeof Schema;
  model: typeof model;
}

interface productSchemaInterface {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: string;
}

interface productDbFuncInterface {
  findbyProp : ({prop  , value } : findbyPropInterface) => Promise<productSchemaInterface & {_id: any} | null>; 
  findById : ({_id} : findByIdInterface) => Promise<productSchemaInterface & {_id: any} | null>; 
  insert : ({productId , productName , productDescription , productPrice} : insertInterface) => Promise<productSchemaInterface & {_id: any}>;  
  update : ({_id , productId , productName , productDescription , productPrice} : updateInterface) => Promise<any>; 
  deleteOne : ({_id} : deleteInterface) => Promise<productSchemaInterface & { _id: any} | null>;
  find: () => Promise<any>;
  aggregate : (options : any) => Promise<any[]>;
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
  productName: string;
  productDescription: string;
  productPrice: string;
}

interface updateInterface {
  _id: string;
  productId?: string;
  productName?: string;
  productDescription?: string;
  productPrice?: string;
}

interface deleteInterface {
  _id : string;
}

interface injectDb {
  ProductDb : productDbFuncInterface;
}

export {
  productDbFuncInterface,
  makeProductDbInterface,
  productSchemaInterface,
  findByIdInterface,
  findbyPropInterface,
  insertInterface,
  updateInterface,
  deleteInterface,
  injectDb
};
