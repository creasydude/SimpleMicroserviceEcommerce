import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { registerInterface } from "../interfaces/register.interface";

export default function makePostRegister({ register }: registerInterface) {
  return async function postRegister(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.body;
      const registered = await register({ ...authInfo });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { registered },
      };
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        logger.error((e as Error).message)
      }
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error : (e as Error)?.message
        },
      };
    }
  };
}
