import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { validateTokenInterface } from "../interfaces/validateToken.interface";

export default function makeGetValidateToken({
  validateToken,
}: validateTokenInterface) {
  return async function getValidateToken(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.params;
      const data = await validateToken({ ...authInfo });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { ...data },
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
          error: (e as Error)?.message,
        },
      };
    }
  };
}
