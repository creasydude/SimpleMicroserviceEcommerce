import logger from "../helpers/Logger";
import { httpRequestInterface } from "../interfaces/http.interface";
import { resendOtpInterface } from "../interfaces/resendOtp.interface";

export default function makePostResendOtp({ resendOtp }: resendOtpInterface) {
  return async function postResendOtp(httpRequest: httpRequestInterface) {
    try {
      const authInfo = httpRequest.body;
      const user = await resendOtp({ ...authInfo });

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { user },
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
