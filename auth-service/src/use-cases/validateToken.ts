import makeAuth from "../auth";
import { makeAuthInterface } from "../interfaces/auth.interface";
import { injectDbInterface } from "../interfaces/db.interface";

export default function makeValidateToken({ userDb }: injectDbInterface) {
  return async function validateToken(authInfo: makeAuthInterface) {
    if (!authInfo.tokenToVerify) throw new Error("No Token Found");
    const user = await makeAuth({ ...authInfo });
    const verifiedToken = user.getVerifiedToken();
    return {
      user : verifiedToken,
    };
  };
}
