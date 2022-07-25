import { userSchemaInterface } from "./db.interface";
import { makeAuthInterface } from "./auth.interface";

interface registerInterface {
  register: (
    authInfo: makeAuthInterface
  ) => Promise<userSchemaInterface & { _id: any }>;
}

export { registerInterface };
