import { AuthService } from "../services";
import { httpRequestInterface } from "../interfaces/express.interface";
import logger from "../helpers/Logger";

const AUTH_HEADER_NAME = "Authorization";

export default async function userSession(httpRequest: httpRequestInterface) {
  const tokenToVerify = httpRequest.headers[AUTH_HEADER_NAME]?.split(" ")[1];
  let session = undefined;
  if (tokenToVerify) {
    try {
      const req = await AuthService.validateToken({ tokenToVerify });
      session = req.data?.user;
    } catch (error) {
      logger.warn(error);
    }
  }
  return {
    session,
  };
}
