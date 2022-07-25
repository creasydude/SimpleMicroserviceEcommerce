import { makeAuthInterface } from "./auth.interface";

interface validateTokenInterface {
  validateToken: (authInfo: makeAuthInterface) => Promise<any>;
}

export { validateTokenInterface };
