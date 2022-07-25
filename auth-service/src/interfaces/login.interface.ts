import { makeAuthInterface } from "./auth.interface";

interface loginInterface {
  login: (
    authInfo: makeAuthInterface
  ) => Promise<{ accessToken: string; refreshToken: string }>;
}

export { loginInterface };
