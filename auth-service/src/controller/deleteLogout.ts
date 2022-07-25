import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { logoutInterface } from "../interfaces/logout.interface";

export default function makeDeleteLogout({ logout }: logoutInterface) {
  return async function deleteLogout(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.cookies;
      const request = await logout({ ...authInfo });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { message: request },
        clearCookie: "Authorization",
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
