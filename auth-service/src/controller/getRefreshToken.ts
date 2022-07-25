import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { refreshToken } from "../interfaces/refreshToken.interface";

export default function makeGetRefreshToken({ refreshToken }: refreshToken) {
  return async function getRefreshToken(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.cookies;
      const token = await refreshToken({ ...authInfo });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { accessToken: token },
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
