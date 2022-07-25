import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { loginInterface } from "../interfaces/login.interface";

export default function makePostLogin({ login } : loginInterface) {
  return async function postLogin(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.body;
      const tokens = await login({ ...authInfo });
      const cookieExpire = 1000 * 60 * 60 * 24 * 30; // would expire after 1month

      return {
        headers: {
          "Content-Type": "application/json",
        },
        cookie: {
          name: "Authorization", 
          value: tokens.refreshToken, 
          options: {
            maxAge: cookieExpire, 
            httpOnly:true,
            secure: process.env.NODE_ENV === "production" ? true : false ,
            sameSite: process.env.NODE_ENV === "production" ? "none" : false,
            // secure: true ,
            // sameSite: "none",
          }
        },
        statusCode: 200,
        body: { accessToken : tokens.accessToken },
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
